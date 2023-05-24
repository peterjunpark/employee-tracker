-- Inserting records into the department table
INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Marketing"),
       (3, "Human Resources");

-- Inserting records into the role table
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Manager", 80000.00, 1),
       (2, "Marketing Specialist", 60000.00, 2),
       (3, "HR Coordinator", 50000.00, 3);

-- Inserting records into the employee table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Doe", 1, NULL),
       (2, "Jane", "Smith", 2, 1),
       (3, "Mike", "Johnson", 2, 1),
       (4, "Emily", "Davis", 3, NULL),
       (5, "David", "Brown", 3, 4);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

