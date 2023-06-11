var dgg, tableName, databaseName, databaseConfigId;
$(function () {
    databaseName = $("#databaseName").val();
    tableName = $("#tableName").val();
    databaseConfigId = $("#databaseConfigId").val();
    initData()
});

function initData() {
    var a = [];
    a.push({value: "YES", text: "YES"});
    a.push({value: "NO", text: "NO"});
    a = [];
    a.push({value: "", text: ""});
    a.push({value: "PRI", text: "YES"});
    a.push({value: "NO", text: "NO"});
    a = [];
    a.push({value: "char", text: "char"});
    a.push({value: "character", text: "character"});
    a.push({value: "character varying", text: "character varying"});
    a.push({value: "binary", text: "binary"});
    a.push({value: "bigint", text: "bigint"});
    a.push({value: "bit", text: "bit"});
    a.push({value: "blob", text: "blob"});
    a.push({
        value: "date",
        text: "date"
    });
    a.push({value: "datetime", text: "datetime"});
    a.push({value: "double", text: "double"});
    a.push({value: "decimal", text: "decimal"});
    a.push({value: "enum", text: "enum"});
    a.push({value: "float", text: "float"});
    a.push({value: "int", text: "int"});
    a.push({value: "integer", text: "integer"});
    a.push({value: "longtext", text: "longtext"});
    a.push({value: "longblob", text: "longblob"});
    a.push({value: "mediumint", text: "mediumint"});
    a.push({value: "mediumblob", text: "mediumblob"});
    a.push({value: "mediumtext", text: "mediumtext"});
    a.push({value: "number", text: "number"});
    a.push({value: "numeric", text: "numeric"});
    a.push({value: "nvarchar", text: "nvarchar"});
    a.push({value: "real", text: "real"});
    a.push({value: "set", text: "set"});
    a.push({value: "smallint", text: "smallint"});
    a.push({value: "string", text: "string"});
    a.push({value: "tinyint", text: "tinyint"});
    a.push({value: "tinytext", text: "tinytext"});
    a.push({value: "text", text: "text"});
    a.push({value: "tinyblob", text: "tinyblob"});
    a.push({value: "timestamp", text: "timestamp"});
    a.push({
        value: "time",
        text: "time"
    });
    a.push({value: "varchar", text: "varchar"});
    a.push({value: "varchar2", text: "varchar2"});
    a.push({value: "varbinary", text: "varbinary"});
    a.push({value: "year", text: "year"});
    dgg = $("#dg3").datagrid({
        method: "get",
        url: baseUrl + "/system/permission/i/designTableData/" + tableName + "/" + databaseName + "/" + databaseConfigId,
        fit: !0,
        fitColumns: !0,
        border: !1,
        idField: "TREESOFTPRIMARYKEY",
        striped: !0,
        pagination: !0,
        rownumbers: !0,
        pageNumber: 1,
        pageSize: 20,
        pageList: [10, 20, 30, 40, 50],
        singleSelect: !1,
        columns: [[{
            field: "TREESOFTPRIMARYKEY",
            checkbox: !0
        }, {
            field: "COLUMN_NAME",
            title: "\u5b57\u6bb5\u540d",
            sortable: !0,
            width: 30,
            editor: {type: "text", options: {required: !0}}
        }, {
            field: "DATA_TYPE",
            title: "\u7c7b\u578b",
            sortable: !0,
            width: 30,
            editor: {type: "combobox", options: {data: a, valueField: "value", textField: "text"}}
        }, {
            field: "CHARACTER_MAXIMUM_LENGTH",
            title: "\u957f\u5ea6",
            sortable: !0,
            width: 10,
            editor: "numberbox"
        }, {field: "COLUMN_COMMENT", title: "\u6ce8\u91ca", width: 50, sortable: !0, editor: "text"}, {
            field: "IS_NULLABLE", title: "\u5141\u8bb8\u7a7a\u503c", width: 10,
            editor: {type: "checkbox", options: {on: "YES", off: ""}}, formatter: function (a, c, d) {
                return "YES" == a ? '<input type="checkbox"  checked    onclick=changeNullAble(this,' + d + ") >" : '<input type="checkbox"    onclick=changeNullAble(this,' + d + ") >"
            }
        }, {
            field: "COLUMN_KEY",
            title: "\u4e3b\u952e\u8bbe\u7f6e",
            width: 10,
            editor: {type: "checkbox", options: {on: "PRI", off: ""}},
            formatter: function (a, c, d) {
                return "PRI" == a ? '<input type="checkbox"   checked  onclick=changePrimaryKey(this,' + d + ") >" : '<input type="checkbox"   onclick=changePrimaryKey(this,' +
                    d + ") >"
            }
        }]],
        checkOnSelect: !0,
        selectOnCheck: !0,
        extEditing: !1,
        toolbar: "#tb3",
        autoEditing: !0,
        singleEditing: !0,
        onAfterEdit: function (a, c, d) {
        },
        onLoadSuccess: function (a) {
            "fail" == a.status && parent.$.messager.show({title: "\u63d0\u793a", msg: a.mess, position: "center"})
        },
        onDblClickCell: function (a, c, d) {
            $(this).datagrid("beginEdit", a);
            a = $(this).datagrid("getEditor", {index: a, field: c});
            $(a.target).focus()
        }
    })
}

function addRow2() {
    var a = $("#dg3").datagrid("getData").rows.length;
    $("#dg3").datagrid("insertRow", {index: a, row: {}});
    $("#dg3").datagrid("beginEdit", a)
}

function editRow2() {
    var a = $("#dg3").datagrid("getChecked");
    0 == a.length ? parent.$.messager.show({
        title: "\u63d0\u793a",
        msg: "\u8bf7\u5148\u9009\u62e9\u4e00\u884c\u6570\u636e\uff01",
        position: "bottomRight"
    }) : $.each(a, function (a, c) {
        a = $("#dg3").datagrid("getRowIndex", c);
        $("#dg3").datagrid("beginEdit", a)
    })
}

function saveRow() {
    endEdit();
    var a = $("#dg3").datagrid("getChanges", "inserted"), b = $("#dg3").datagrid("getChanges", "updated"), c = {};
    c.databaseName = databaseName;
    c.tableName = tableName;
    a.length && (c.inserted = JSON.stringify(a));
    b.length && (c.updated = JSON.stringify(b));
    a.length || b.length ? $.post(baseUrl + "/system/permission/i/designTableUpdate/" + databaseConfigId, c, function (a) {
        "success" == a.status ? ($("#dg3").datagrid("acceptChanges"), parent.$.messager.show({
                title: "\u63d0\u793a",
                msg: a.mess,
                position: "bottomRight"
            })) :
            $.messager.alert("\u63d0\u793a", a.mess)
    }, "JSON").error(function () {
        $.messager.alert("\u63d0\u793a", "\u63d0\u4ea4\u9519\u8bef\u4e86\uff01")
    }) : parent.$.messager.show({
        title: "\u63d0\u793a",
        msg: "\u6ca1\u6709\u53d8\u66f4\u5185\u5bb9\uff01",
        position: "bottomRight"
    })
}

function MoveUp() {
    var a = $("#dg3").datagrid("getSelected");
    a = $("#dg3").datagrid("getRowIndex", a);
    mysort(a, "up", "dg3")
}

function MoveDown() {
    var a = $("#dg3").datagrid("getSelected");
    a = $("#dg3").datagrid("getRowIndex", a);
    mysort(a, "down", "dg3")
}

function mysort(a, b, c) {
    if ("up" == b) {
        if (0 != a) {
            b = $("#" + c).datagrid("getData").rows[a];
            var d = $("#" + c).datagrid("getData").rows[a - 1];
            $("#" + c).datagrid("getData").rows[a] = d;
            $("#" + c).datagrid("getData").rows[a - 1] = b;
            $("#" + c).datagrid("refreshRow", a);
            $("#" + c).datagrid("refreshRow", a - 1);
            $("#" + c).datagrid("unselectRow", a);
            $("#" + c).datagrid("selectRow", a - 1);
            d = b.treeSoftPrimaryKey;
            b = "";
            1 < a && (b = $("#" + c).datagrid("getData").rows[a - 2].treeSoftPrimaryKey);
            dosort(d, b)
        }
    } else "down" == b && (b = $("#" + c).datagrid("getRows").length,
    a != b - 1 && (d = $("#" + c).datagrid("getData").rows[a], b = $("#" + c).datagrid("getData").rows[a + 1], $("#" + c).datagrid("getData").rows[a + 1] = d, $("#" + c).datagrid("getData").rows[a] = b, $("#" + c).datagrid("refreshRow", a), $("#" + c).datagrid("refreshRow", a + 1), $("#" + c).datagrid("unselectRow", a), $("#" + c).datagrid("selectRow", a + 1), d = d.treeSoftPrimaryKey, b = b.treeSoftPrimaryKey, dosort(d, b)))
}

function refresh() {
    $("#dg3").datagrid("reload");
    $("#dg3").datagrid("clearSelections").datagrid("clearChecked")
}

function cancelChange() {
    endEdit();
    refresh()
}

function endEdit() {
    for (var a = $("#dg3").datagrid("getRows"), b = 0; b < a.length; b++) $("#dg3").datagrid("endEdit", b)
}

function deleteTableColumn() {
    var a = $("#dg3").datagrid("getChecked"), b = a.length;
    if (0 == a.length) parent.$.messager.show({
        title: "\u63d0\u793a",
        msg: "\u8bf7\u5148\u9009\u62e9\u4e00\u884c\u6570\u636e\uff01",
        position: "bottomRight"
    }); else {
        var c = [];
        $.each(a, function (a, b) {
            c.push(b.TREESOFTPRIMARYKEY)
        });
        $.easyui.messager.confirm("\u64cd\u4f5c\u63d0\u793a", "\u60a8\u786e\u5b9a\u8981\u5220\u9664" + b + "\u884c\u6570\u636e\uff1f", function (a) {
            a && $.ajax({
                type: "POST",
                contentType: "application/json;charset=utf-8",
                url: baseUrl +
                    "/system/permission/i/deleteTableColumn/" + databaseConfigId,
                data: JSON.stringify({databaseName: databaseName, tableName: tableName, ids: c}),
                datatype: "json",
                success: function (a) {
                    "success" == a.status ? ($("#dg3").datagrid("reload"), $("#dg3").datagrid("clearSelections").datagrid("clearChecked"), parent.$.messager.show({
                        title: "\u63d0\u793a",
                        msg: "\u5220\u9664\u6210\u529f\uff01",
                        position: "bottomRight"
                    })) : parent.$.messager.show({title: "\u63d0\u793a", msg: a.mess, position: "bottomRight"})
                }
            })
        })
    }
}

function changeNullAble(a, b) {
    b = $("#dg3").datagrid("getData").rows[b].TREESOFTPRIMARYKEY;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: baseUrl + "/system/permission/i/designTableSetNull/" + databaseConfigId,
        data: JSON.stringify({
            databaseName: databaseName,
            tableName: tableName,
            column_name: b,
            is_nullable: a.checked
        }),
        datatype: "json",
        success: function (a) {
            "success" == a.status ? ($("#dg3").datagrid("clearSelections").datagrid("clearChecked"), parent.$.messager.show({
                title: "\u63d0\u793a", msg: "\u4fdd\u5b58\u6210\u529f\uff01",
                position: "bottomRight"
            })) : parent.$.messager.show({title: "\u63d0\u793a", msg: a.mess, position: "bottomRight"})
        }
    })
}

function changePrimaryKey(a, b) {
    b = $("#dg3").datagrid("getData").rows[b].TREESOFTPRIMARYKEY;
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: baseUrl + "/system/permission/i/designTableSetPimary/" + databaseConfigId,
        data: JSON.stringify({databaseName: databaseName, tableName: tableName, column_name: b, column_key: a.checked}),
        datatype: "json",
        success: function (a) {
            "success" == a.status ? ($("#dg3").datagrid("clearSelections").datagrid("clearChecked"), parent.$.messager.show({
                title: "\u63d0\u793a", msg: "\u4fdd\u5b58\u6210\u529f\uff01",
                position: "bottomRight"
            })) : parent.$.messager.show({title: "\u63d0\u793a", msg: a.mess, position: "bottomRight"})
        }
    })
}

function dosort(a, b) {
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: baseUrl + "/system/permission/i/upDownColumn/" + databaseConfigId,
        data: JSON.stringify({databaseName: databaseName, tableName: tableName, column_name: a, column_name2: b}),
        datatype: "json",
        success: function (a) {
            parent.$.messager.show({title: "\u63d0\u793a", msg: a.mess, position: "bottomRight"})
        }
    })
};
