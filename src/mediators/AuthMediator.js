module.exports = function AuthMediator(opts) {
    const { svcTalos } = opts;

    async function test() {
        //  number = sanitizePhoneNumber({ phone: number });
        account = await svcTalos.getFromDB();
        return account;
    }

    async function insertEmpDataIntoDB({
        emp_id,
        username,
        review,
        userId,
        compId,
    }) {
        res = await svcTalos.insertEmpDataIntoDB({
            emp_id,
            username,
            review,
            userId,
            compId,
        });
        return res;
    }

    //Login
    async function GetUser(email) {
        res = await svcTalos.GetUser(email);
        return res;
    }
    async function GetCompanyId(userId) {
        console.log("Mediator mai : ", userId);
        res = await svcTalos.GetCompanyId(userId);
        return res;
    }

    async function CreateUser({ userId, email, username, hashedPassword }) {
        res = await svcTalos.CreateUser({
            userId,
            email,
            username,
            hashedPassword,
        });
        return res;
    }

    async function CompanyDetails({ compId, company_name, city, userId }) {
        res = await svcTalos.CompanyDetails({
            compId,
            company_name,
            city,
            userId,
        });
        return res;
    }

    async function GetCompanies() {
        res = await svcTalos.GetCompanies();
        return res;
    }
    async function getReview({ compId }) {
        res = await svcTalos.getReview({
            compId,
        });
        return res;
    }

    return {
        test,
        insertEmpDataIntoDB,
        CreateUser,
        CompanyDetails,
        GetUser,
        GetCompanyId,
        GetCompanies,
        getReview,
    };
};
