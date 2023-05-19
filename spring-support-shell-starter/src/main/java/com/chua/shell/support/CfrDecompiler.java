package com.chua.shell.support;

import com.google.common.base.Strings;
import org.benf.cfr.reader.api.CfrDriver;
import org.benf.cfr.reader.api.OutputSinkFactory;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.StringReader;
import java.util.*;

import static org.benf.cfr.reader.api.SinkReturns.LineNumberMapping;

/**
 * 反编译
 *
 * @author CH
 */
public class CfrDecompiler implements Decompiler {

    public String decompile(String classFilePath, String methodName) {
        return decompile(classFilePath, methodName, false);
    }

    public String decompile(String classFilePath, String methodName, boolean hideUnicode) {
        return decompile(classFilePath, methodName, hideUnicode, true);
    }

    public Pair<String, NavigableMap<Integer, Integer>> decompileWithMappings(String classFilePath,
                                                                              String methodName, boolean hideUnicode, boolean printLineNumber) {
        final StringBuilder sb = new StringBuilder(8192);

        final NavigableMap<Integer, Integer> lineMapping = new TreeMap<Integer, Integer>();

        OutputSinkFactory mySink = new OutputSinkFactory() {
            @Override
            public List<SinkClass> getSupportedSinks(SinkType sinkType, Collection<SinkClass> collection) {
                return Arrays.asList(SinkClass.STRING, SinkClass.DECOMPILED, SinkClass.DECOMPILED_MULTIVER,
                        SinkClass.EXCEPTION_MESSAGE, SinkClass.LINE_NUMBER_MAPPING);
            }

            @Override
            public <T> Sink<T> getSink(final SinkType sinkType, final SinkClass sinkClass) {
                return new Sink<T>() {
                    @Override
                    public void write(T sinkable) {
                        // skip message like: Analysing type demo.MathGame
                        if (sinkType == SinkType.PROGRESS) {
                            return;
                        }
                        if (sinkType == SinkType.LINENUMBER) {
                            LineNumberMapping mapping = (LineNumberMapping) sinkable;
                            NavigableMap<Integer, Integer> classFileMappings = mapping.getClassFileMappings();
                            NavigableMap<Integer, Integer> mappings = mapping.getMappings();
                            if (classFileMappings != null && mappings != null) {
                                for (Map.Entry<Integer, Integer> entry : mappings.entrySet()) {
                                    Integer srcLineNumber = classFileMappings.get(entry.getKey());
                                    lineMapping.put(entry.getValue(), srcLineNumber);
                                }
                            }
                            return;
                        }
                        sb.append(sinkable);
                    }
                };
            }
        };

        HashMap<String, String> options = new HashMap<String, String>();
        /**
         * @see org.benf.cfr.reader.util.MiscConstants.Version.getVersion() Currently,
         *      the cfr version is wrong. so disable show cfr version.
         */
        options.put("showversion", "false");
        options.put("hideutf", String.valueOf(hideUnicode));
        options.put("trackbytecodeloc", "true");
        if (!Strings.isNullOrEmpty(methodName)) {
            options.put("methodname", methodName);
        }

        CfrDriver driver = new CfrDriver.Builder().withOptions(options).withOutputSink(mySink).build();
        List<String> toAnalyse = new ArrayList<String>();
        toAnalyse.add(classFilePath);
        driver.analyse(toAnalyse);

        String resultCode = sb.toString();
        if (printLineNumber && !lineMapping.isEmpty()) {
            resultCode = addLineNumber(resultCode, lineMapping);
        }

        return Pair.make(resultCode, lineMapping);
    }

    @Override
    public String decompile(String classFilePath, String methodName, boolean hideUnicode,
                            boolean printLineNumber) {
        return decompileWithMappings(classFilePath, methodName, hideUnicode, printLineNumber).getFirst();
    }

    private String addLineNumber(String src, Map<Integer, Integer> lineMapping) {
        int maxLineNumber = 0;
        for (Integer value : lineMapping.values()) {
            if (value != null && value > maxLineNumber) {
                maxLineNumber = value;
            }
        }

        String formatStr = "/*%2d*/ ";
        String emptyStr = "       ";

        StringBuilder sb = new StringBuilder();

        List<String> lines = toLines(src);

        if (maxLineNumber >= 1000) {
            formatStr = "/*%4d*/ ";
            emptyStr = "         ";
        } else if (maxLineNumber >= 100) {
            formatStr = "/*%3d*/ ";
            emptyStr = "        ";
        }

        int index = 0;
        for (String line : lines) {
            Integer srcLineNumber = lineMapping.get(index + 1);
            if (srcLineNumber != null) {
                sb.append(String.format(formatStr, srcLineNumber));
            } else {
                sb.append(emptyStr);
            }
            sb.append(line).append("\n");
            index++;
        }

        return sb.toString();
    }

    public static List<String> toLines(String text) {
        List<String> result = new ArrayList<String>();
        BufferedReader reader = new BufferedReader(new StringReader(text));
        try {
            String line = reader.readLine();
            while (line != null) {
                result.add(line);
                line = reader.readLine();
            }
        } catch (IOException exc) {
            // quit
        } finally {
            try {
                reader.close();
            } catch (IOException e) {
                // ignore
            }
        }
        return result;
    }
}
