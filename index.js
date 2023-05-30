const inquirer = require("inquirer");
const { DeptQuery, RoleQuery, EmplQuery } = require("./lib/Query.js");
require("console.table");

const questions = [
  {
    name: "query",
    type: "list",
    message: "Choose a task:",
    choices: [
      { name: "View all departments", value: new DeptQuery() },
      { name: "View all roles", value: new RoleQuery() },
      { name: "View all employees", value: new EmplQuery() },
      new inquirer.Separator(),
      { name: "Add a department", value: new DeptQuery("insert") },
      { name: "Add a role", value: new RoleQuery("insert") },
      { name: "Add an employee", value: new EmplQuery("insert") },
      new inquirer.Separator(),
      // { name: "Update an employee's role", value: new EmplUpdate() },
      // new inquirer.Separator(),
    ],
  },
  {
    name: "deptName",
    type: "input",
    message: "Enter the name of the new department:",
    when: (answers) =>
      answers.query instanceof DeptQuery && answers.query.type === "insert",
  },
  {
    name: "roleName",
    type: "input",
    message: "Enter the name of the new role:",
    when: (answers) =>
      answers.query instanceof RoleQuery && answers.query.type === "insert",
  },
  {
    name: "roleSalary",
    type: "input",
    message: "Enter the new role's salary:",
    when: (answers) =>
      answers.query instanceof RoleQuery && answers.query.type === "insert",
  },
  {
    name: "roleDepartment",
    type: "input",
    message: "Enter the id of the role's department:",
    when: (answers) =>
      answers.query instanceof RoleQuery && answers.query.type === "insert",
  },
  {
    name: "emplFirst",
    type: "input",
    message: "Enter the new employee's first name:",
    when: (answers) =>
      answers.query instanceof EmplQuery && answers.query.type === "insert",
  },
  {
    name: "emplLast",
    type: "input",
    message: "Enter the new employee's last name:",
    when: (answers) =>
      answers.query instanceof EmplQuery && answers.query.type === "insert",
  },
  {
    name: "emplRole",
    type: "input",
    message: "Enter the id of the new employee's role:",
    when: (answers) =>
      answers.query instanceof EmplQuery && answers.query.type === "insert",
  },
  {
    name: "emplManager",
    type: "input",
    message: "Enter the id of the new employee's manager:",
    when: (answers) =>
      answers.query instanceof EmplQuery && answers.query.type === "insert",
  },
];

async function prompt() {
  try {
    const { query, ...data } = await inquirer.prompt(questions);
    if (query.type === "insert") {
      await query.insert(data);
      console.log("Success!");
    }
    // Show table.
    const results = await query.select();
    console.table(results);
  } catch (err) {
    console.error(err);
  }
}
console.log("\x1b[1;32m --- Employee Tracker --- ");
prompt();
