
var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver(
    "bolt://hobby-ceihhdmkgedpgbkeimibbbbl.dbs.graphenedb.com:24786",
    neo4j.auth.basic(
        "admin",
        "b.5br0AXcZSBFj.PJToLUVm5vMRSodw"));

module.exports = driver;