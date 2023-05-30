const connect = require("../config/connection.js");

class Query {
  constructor(query, data = null) {
    this.query = query;
    this.data = data;
  }

  async select() {
    try {
      const connection = await connect();
      const [results] = await connection.query(this.query);
      connection.end();
      return results;
    } catch (err) {
      return err;
    }
  }

  // async add() {
  //   const { departmentName } = await inquirer.prompt([
  //     {
  //       name: "departmentName",
  //       type: "input",
  //       message: "Enter the name of the department to add:",
  //     },
  //   ]);

  //   connection.query(
  //     `INSERT INTO department (name) VALUES ('${departmentName}')`,
  //     (err) => {
  //       err
  //         ? console.error(err)
  //         : console.info(`${departmentName} successfully added.\n`);
  //     }
  //   );
  // }
}

class DeptQuery extends Query {
  constructor() {
    super(`SELECT
        id,
        name AS department
      FROM department;`);
  }
}

class RoleQuery extends Query {
  constructor() {
    super(`SELECT
        role.id,
        role.title,
        role.salary,
        department.name AS department
      FROM role
        INNER JOIN department
        ON role.department_id = department.id;`)
  }
}

class EmplQuery extends Query {
  constructor() {
    super(`SELECT
        employee.id,
        CONCAT (employee.first_name, " ", employee.last_name) AS name,
        role.title AS role,
        role.salary,
        CONCAT (manager.first_name, " ", manager.last_name) AS manager
      FROM employee
        INNER JOIN role ON role.id = employee.role_id
        LEFT JOIN employee AS manager ON manager.id = employee.manager_id;`)
  }
}

module.exports = {
  DeptQuery, RoleQuery, EmplQuery
};
