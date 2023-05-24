const inquirer = require("inquirer");
const { getTable } = require("./lib/db-queries.js");

console.log("\x1b[1;32m --- Employee Tracker --- ");
const questions = [
  {
    name: "task",
    type: "list",
    message: "Choose a task:",
    choices: [
      // Value format: {task type}@{table}/{by?}
      { name: "View all departments", value: "view@department" },
      { name: "View all roles", value: "view@role" },
      { name: "View all employees", value: "view@employee" },
      {
        name: "View employees by department",
        value: "view@employee@department",
      },
      {
        name: "View employees by manager",
        value: "view@employee@manager",
      },
      {
        name: "View the total utilized budget of a department",
        value: "view@department@budget",
      },
      new inquirer.Separator(),
      { name: "Add a department", value: "add@department" },
      { name: "Add a role", value: "add@role" },
      { name: "Add an employee", value: "add@employee" },
      new inquirer.Separator(),
      { name: "Update an employee's role", value: "update@employee@role" },
      {
        name: "Update an employee's manager",
        value: "update@employee@manager",
      },
      new inquirer.Separator(),
      { name: "Delete a department", value: "delete@department" },
      { name: "Delete a role", value: "delete@role" },
      { name: "Delete an employee", value: "delete@employee" },
      new inquirer.Separator(),
    ],
  },
];

inquirer.prompt(questions).then(({ task }) => {
  const [taskType, taskTable, taskColumn] = task.split("@");
  switch (taskType) {
    case "view":
      getTable(taskTable);
      //TODO: Implement logic for add, update, delete
    case "add":
    case "update":
    case "delete":
      console.error("not implemented yet")
  }
});
