module.exports = function SvcTalos(opts) {
    const { svcCache, queryHandler, mdlTest, db } = opts;
    async function getFromDB(phone) {
        //const token = await svcCache.getKV({ key: 'ELRP_TOKEN' });
        const result = await db["primary"].query(mdlTest.CreateUsersTable, "");
        const response = result;
        return response;
    }

    async function insertEmpDataIntoDB({ emp_id, username, review }) {
        const result = await db["primary"].query(mdlTest.InsertEmp, {
            ID: emp_id,
            username: username,
            review: review,
            company_name: "areeb",
        });
        console.log(result);
        const response = result;
        return response;
    }
    async function CreateUser({ username, password, email, company_name }) {
        const result = await db["primary"].query(mdlTest.InsertUser, {
            username,
            password,
            email,
            company_name,
        });
        return result;
    }
    async function InsertCompany({ company_name, city }) {
        const result = await db["primary"].query(mdlTest.InsertCompany, {
            company_name,
            city,
        });
        return result;
    }
    async function GetUser({ email }) {
        const result = await db["primary"].query(mdlTest.getUser, {
            email,
        });
        return result;
    }

    async function getReview({ company_name }) {
        const result = await db["primary"].query(mdlTest.getReview, {
            company_name,
        });
        return result;
    }

    return {
        getFromDB,
        insertEmpDataIntoDB,
        CreateUser,
        InsertCompany,
        GetUser,
        getReview,
    };
};
