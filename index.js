const inquirer = require("inquirer");
const { DeptQuery, RoleQuery, EmplQuery } = require("./lib/Query.js");
require("console.table");

console.log("\x1b[1;32m --- Employee Tracker --- ");
const questions = [
  {
    name: "query",
    type: "list",
    message: "Choose a task:",
    choices: [
      { name: "View all departments", value: new DeptQuery() },
      { name: "View all roles", value: new RoleQuery() },
      { name: "View all employees", value: new EmplQuery("employee") },
      // {
      //   name: "View employees by department",
      //   value: "view@employee@department",
      // },
      // {
      //   name: "View employees by manager",
      //   value: "view@employee@manager",
      // },
      // {
      //   name: "View the total utilized budget of a department",
      //   value: "view@department@budget",
      // },
      // new inquirer.Separator(),
      // { name: "Add a department", value: "add@department" },
      // { name: "Add a role", value: "add@role" },
      // { name: "Add an employee", value: "add@employee" },
      // new inquirer.Separator(),
      // { name: "Update an employee's role", value: "update@employee@role" },
      // {
      //   name: "Update an employee's manager",
      //   value: "update@employee@manager",
      // },
      // new inquirer.Separator(),
      // { name: "Delete a department", value: "delete@department" },
      // { name: "Delete a role", value: "delete@role" },
      // { name: "Delete an employee", value: "delete@employee" },
      // new inquirer.Separator(),
    ],
  },
];

async function prompt() {
  try {
    const { query }= await inquirer.prompt(questions);
    const results = await query.select();
    console.table(results);
  } catch (err) {
    console.error(err);
  }
}

prompt();
