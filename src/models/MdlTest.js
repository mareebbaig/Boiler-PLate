module.exports = function MdlTest(phone) {
    return {
        query: "",
        // CREATE TABLE department(
        //     dept_id	INT PRIMARY KEY,
        //     dept_name	VARCHAR(50)
        // );
        // CreateUsersTable:
        //     "CREATE TABLE users (email VARCHAR (40) PRIMARY KEY,username VARCHAR (50) NOT NULL, password VARCHAR (50) NOT NULL, company_name VARCHAR(40) REFERENCES COMPANY (company_name));",
        // CreatEmpTable:
        //     "CREATE TABLE employees (emp_id serial PRIMARY KEY, username VARCHAR (50) NOT NULL, review text NOT NULL,company_name VARCHAR(40) REFERENCES COMPANY (company_name));",
        // CreatCompanyTable:
        //     "CREATE TABLE company (company_name VARCHAR(40) PRIMARY KEY NOT NULL , city VARCHAR(40) NOT NULL );",
        // DropEmpTabel: "drop table employees",
        // DropUsersTabel: "drop table users",
        // DropCompanyTabel: "drop table company",
        InsertUser:
            "INSERT INTO users(username, password,email,company_name) VALUES(${username}, ${password} , ${email},${company_name}) RETURNING username,email,company_name",
        InsertCompany:
            "INSERT INTO company(company_name , city) VALUES(${company_name} , ${city})",
        InsertEmp:
            "INSERT INTO employees(emp_id, username,review,company_name) VALUES(${ID}, ${username} , ${review} , ${company_name}) RETURNING emp_id , username , review",
        getUser: "SELECT * FROM users WHERE email = ${email}",
        getReview:
            "SELECT * from employees where company_name = ${company_name}",
    };
};
