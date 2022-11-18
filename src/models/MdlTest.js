module.exports = function MdlTest() {
    return {
        query: "",
        // CREATE TABLE department(
        //     dept_id	INT PRIMARY KEY,
        //     dept_name	VARCHAR(50)
        // ); CREATE TABLE users(userId VARCHAR(10) PRIMARY KEY, email VARCHAR(40) PRIMARY KEY, username VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL);
        // CreateUsersTable:
        //     "CREATE TABLE users(userId text PRIMARY KEY,email VARCHAR(40), username VARCHAR(50) NOT NULL, password VARCHAR(50) NOT NULL);",
        // CreatEmpTable:
        //     "CREATE TABLE employees(emp_id text PRIMARY KEY, username VARCHAR(50) NOT NULL, review text NOT NULL, userId text REFERENCES users(userId) , compId text REFERENCES company(compId));",
        // CreatCompanyTable:
        //     "CREATE TABLE company (compId text PRIMARY KEY,company_name VARCHAR(40)NOT NULL, city VARCHAR(40) NOT NULL, userId text REFERENCES users (userId));",
        // DropEmpTabel: "drop table employees",
        // DropUsersTabel: "DROP TABLE users;",
        // DropCompanyTabel: "drop table company",

        InsertUser:
            "INSERT INTO users(userId, email, username, password) VALUES(${userId} , ${email} , ${username} , ${password}) RETURNING userId",
        InsertCompany:
            "INSERT INTO company(compId,company_name,city,userId) VALUES(${compId},${company_name},${city},${userId}) RETURNING compId",
        InsertEmp:
            "INSERT INTO employees(emp_id,username,review,userId,compId) VALUES(${emp_id}, ${username} , ${review} , ${userId} , ${compId})",

        getUser: "SELECT * FROM users WHERE email = ${email}",
        GetCompanyId: "SELECT compId from company WHERE userId = ${userId}",
        getReview:
            "SELECT * from employees where company_name = ${company_name}",
    };
};
