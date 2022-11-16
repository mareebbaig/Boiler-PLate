module.exports = function AuthMediator(opts) {
    const { svcTalos } = opts;

    async function test({ username, age }) {
        //  number = sanitizePhoneNumber({ phone: number });
        account = await svcTalos.getFromDB({ username, age });
        return account;
    }

    async function insertEmpDataIntoDB({ emp_id, username, review }) {
        res = await svcTalos.insertEmpDataIntoDB({ emp_id, username, review });
        return res;
    }

    async function GetUser({ email }) {
        res = await svcTalos.GetUser({ email });
        return res;
    }

    async function CreateUser({ username, password, email, company_name }) {
        res = await svcTalos.CreateUser({
            username,
            password,
            email,
            company_name,
        });
        return res;
    }

    async function InsertCompany({ company_name, city }) {
        res = await svcTalos.InsertCompany({
            company_name,
            city,
        });
        return res;
    }

    async function getReview({ company_name }) {
        res = await svcTalos.getReview({
            company_name,
        });
        return res;
    }

    return {
        test,
        insertEmpDataIntoDB,
        CreateUser,
        InsertCompany,
        GetUser,
        getReview,
    };
};
