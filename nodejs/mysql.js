// var stringify = require('json-stringify-safe')
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "jana",
    password: "jana"
});
// var connect = stringify(con);//change to string
// var connectObj = JSON.parse(connect);//convert to json object
// var str = JSON.stringify(connectObj, null, 2);
//  console.log( con);
var sql = "select english,maths from school.marks where name='Vijayan'";
var merge = "select marks.*,students.* from school.marks inner join school.students on marks.name = students.first_name";
// con.connect(nithya);
// function nithya(err) {
//     if (err) throw err;
//     kovarthini(err);
// }
// function kovarthini(err) {
//     con.query(sql, vicky(err, result, fields));
// }
// function vicky(err, result, fields) {
//     if (err) throw err;
//     if (result) {
//         console.log(fields);
//         console.log(result);
//     }
// }
con.connect(f1);
function f1(err) {
    if (err) throw err;
    con.query(sql, f2);
    con.query(merge, f2);

}
function f2(err, result, fields) {
    if (err) throw err;
    console.log(JSON.parse(JSON.stringify(result)));
}