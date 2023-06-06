const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: "server_H5",
  username: 'root',
  password: 's0313y1127',
});

// 简单查询
connection.query(
  'SELECT * FROM my_db_001.my_db_table_demo',
  function (err, results, fields) {
    console.log(results, 'results'); // 结果集
    // console.log(fields); // 额外的元数据（如果有的话）
  }
);

// 使用占位符
// connection.query(
//   'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function (err, results) {
//     console.log(results);
//   }
// );