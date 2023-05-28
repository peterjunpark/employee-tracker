-- View all departments
SELECT
    id,
    name AS department
FROM
    department;

-- View all roles
SELECT
    role.id,
    role.title,
    role.salary,
    department.name AS department
FROM
    role
    INNER JOIN department ON role.department_id = department.id;

-- View all employees
SELECT
    employee.id,
    CONCAT (employee.first_name, " ", employee.last_name) AS name,
    role.title AS role,
    role.salary,
    CONCAT (manager.first_name, " ", manager.last_name) AS manager
FROM
    employee
    INNER JOIN role ON role.id = employee.role_id
    LEFT JOIN employee AS manager ON manager.id = employee.manager_id;

-- Add a department
-- INSERT INTO department (name)
-- VALUES ()
