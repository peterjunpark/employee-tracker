const inquirer = require("inquirer");
const { getTable } = require("./lib/db-queries.js")

getTable('department');
getTable('role');
getTable('employee');

// console.log("\x1b[1;32m --- Employee Tracker --- ");
// const questions = [
//   {
//     name: "task",
//     type: "list",
//     message: "Choose a task:",
//     choices: [
//       "View all departments",
//       "View all roles",
//       "View all employees",
//       new inquirer.Separator(),
//       "Add a department",
//       "Add a role",
//       "Add an employee",
//       new inquirer.Separator(),
//       "Update an employee's role",
//       new inquirer.Separator(),
//     ],
//   },
// ];

// inquirer.prompt(questions).then((answers) => {
//   console.log(answers);
// });
