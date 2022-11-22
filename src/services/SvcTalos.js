module.exports = function SvcTalos(opts) {
    const { svcCache, queryHandler, mdlTest, db } = opts;
    async function getFromDB() {
        //const token = await svcCache.getKV({ key: 'ELRP_TOKEN' });
        const result = await db["primary"].none(mdlTest.CreatEmpTable);
        console.log("result: ", result);
        const response = result;
        return response;
    }

    async function insertEmpDataIntoDB({
        emp_id,
        username,
        review,
        userId,
        compId,
    }) {
        const result = await db["primary"].query(mdlTest.InsertEmp, {
            emp_id,
            username,
            review,
            userId,
            compId,
        });
        console.log(result);
        const response = result;
        return response;
    }

    async function CreateUser({ userId, email, username, hashedPassword }) {
        const result = await db["primary"].query(mdlTest.InsertUser, {
            userId,
            email,
            username,
            hashedPassword,
        });
        return result;
    }

    async function CompanyDetails({ compId, userId, company_name, city }) {
        const result = await db["primary"].query(mdlTest.InsertCompany, {
            compId,
            company_name,
            city,
            userId,
        });
        return result;
    }

    async function GetUser(email) {
        const result = await db["primary"].query(mdlTest.getUser, {
            email,
        });
        return result;
    }

    async function GetCompanyId(userId) {
        console.log("svc Talos mai : ", userId);
        const result = await db["primary"].query(mdlTest.GetCompanyId, {
            userId,
        });
        console.log("svc talos mai company Id ", result);
        return result;
    }

    async function GetCompanies() {
        const result = await db["primary"].query(mdlTest.GetCompanies);
        return result;
    }
    async function getReview({ compId }) {
        const result = await db["primary"].query(mdlTest.getReview, {
            compId,
        });
        return result;
    }

    return {
        getFromDB,
        insertEmpDataIntoDB,
        CreateUser,
        CompanyDetails,
        GetUser,
        GetCompanyId,
        GetCompanies,
        getReview,
    };
};
