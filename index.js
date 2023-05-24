const inquirer = require("inquirer");
const { ViewTask } = require("./lib/Task.js");

console.log("\x1b[1;32m --- Employee Tracker --- ");
const questions = [
  {
    name: "task",
    type: "list",
    message: "Choose a task:",
    choices: [
      { name: "View all departments", value: new ViewTask("department") },
      { name: "View all roles", value: new ViewTask("role") },
      { name: "View all employees", value: new ViewTask("employee") },
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

inquirer.prompt(questions).then(({ task }) => {
  switch (task.type) {
    case "view":
      task.viewTable();
      break;
    case "add":
    case "update":
    case "delete":
      console.log("not implemented");
    default:
      throw new Error("Invalid task type.")
  }
});
