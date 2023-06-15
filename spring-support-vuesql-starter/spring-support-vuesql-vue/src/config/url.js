const HOST = '/api/vuesql';
const URL = {
    OPEN_TABLE: HOST + '/table/open/{configId}/{name}',
    KEYWORD: HOST + '/table/keyword/{configId}',
    EXECUTE: HOST + '/table/execute/{configId}',
    EXPLAIN: HOST + '/table/explain/{configId}',
    LIST_DATASOURCE: HOST + "/database/list",
    UPDATE_DATABASE: HOST + "/database/save",
    DELETE_DATABASE: HOST + "/database/delete/{configId}",
    GET_TABLE_INFO: HOST + "/table/{configId}"
}

export default URL;