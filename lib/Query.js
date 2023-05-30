const connect = require("../config/connection.js");

class Query {
  constructor(type = "view", select) {
    this.type = type;
    this.selector = select;
  }

  setData(data) {
    this.data = data;
  }

  async select() {
    try {
      const connection = await connect();
      const [results] = await connection.query(this.selector);
      connection.end();
      return results;
    } catch (err) {
      return err;
    }
  }

  async insert({
    deptName,
    roleName,
    roleSalary,
    roleDepartment,
    emplFirst,
    emplLast,
    emplRole,
    emplManager,
  }) {
    let query;
    if (this instanceof DeptQuery) {
      query = `INSERT INTO department (name) VALUES ('${deptName}')`;
    } else if (this instanceof RoleQuery) {
      query = `INSERT INTO role (title, salary, department_id) VALUES ('${roleName}', ${Number(roleSalary)}, ${parseInt(roleDepartment)});`;
    } else if (this instanceof EmplQuery) {
      query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${emplFirst}', '${emplLast}', ${parseInt(emplRole)}, ${parseInt(emplManager)});`;
    } else {
      throw new Error("Invalid query class.")
    }

    try {
      const connection = await connect();
      connection.query(query);
      connection.end();
      return;
    } catch (err) {
      return err;
    }
  }
}

class DeptQuery extends Query {
  constructor(type) {
    super(
      type,
      `SELECT
        id,
        name AS department
      FROM department;`
    );
  }
}

class RoleQuery extends Query {
  constructor(type) {
    super(
      type,
      `SELECT
        role.id,
        role.title,
        role.salary,
        department.name AS department
      FROM role
        INNER JOIN department
        ON role.department_id = department.id;`
    );
  }
}

class EmplQuery extends Query {
  constructor(type) {
    super(
      type,
      `SELECT
        employee.id,
        CONCAT (employee.first_name, " ", employee.last_name) AS name,
        role.title AS role,
        role.salary,
        CONCAT (manager.first_name, " ", manager.last_name) AS manager
      FROM employee
        INNER JOIN role ON role.id = employee.role_id
        LEFT JOIN employee AS manager ON manager.id = employee.manager_id;`
    );
  }

  async updateRole({emplUpdateId: id, emplUpdateRole: newRole}) {
    if (this.type !== "update") throw new Error("Invalid query class.");
    const query = `UPDATE employee SET role_id = ${parseInt(newRole)} WHERE id = ${parseInt(id)};`;
    try {
      const connection = await connect();
      connection.query(query);
      connection.end();
      return;
    } catch (err) {
      return err;
    }
  }
}

module.exports = {
  DeptQuery,
  RoleQuery,
  EmplQuery,
};
