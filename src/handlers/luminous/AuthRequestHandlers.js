const P = require("pino");

module.exports = function AuthRequestHandlers(opts) {
    const { authMediator, uuid, bcrypt } = opts;

    async function test(request, reply) {
        const { body } = request;
        console.log("test", body);
        const sent = await authMediator.test();
        reply.send(JSON.stringify(sent));
    }
    // signUp

    async function CreateUser(request, response) {
        const { email, username, password } = request.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashed password: ", typeof hashedPassword);
        const userId = uuid();
        const res1 = await authMediator.CreateUser({
            userId,
            email,
            username,
            hashedPassword,
        });
        response.send(res1);
    }

    // insert review
    async function insertEmpDataIntoDB(request, response) {
        const { username, review, userId, compId } = request.body;
        console.log(request.body);
        const emp_id = uuid();
        const responseFromDB = await authMediator.insertEmpDataIntoDB({
            emp_id,
            username,
            review,
            userId,
            compId,
        });
        response.send(responseFromDB);
    }

    async function CompanyDetails(request, response) {
        const { company_name, city, userId } = request.body;
        const compId = uuid();
        const res = await authMediator.CompanyDetails({
            compId,
            company_name,
            city,
            userId,
        });
        response.send(res);
    }

    async function CheckUser(request, response) {
        const { email, password } = request.body;

        const data = await authMediator.GetUser(email);
        console.log("ye aya hai data base se: ", data);
        if (!data.length) {
            response.send(data); // response khali return horha hai yahan pe.
        } else {
            if (password === data[0].password) {
                const compId = await authMediator.GetCompanyId(data[0].userid);
                console.log("companyId : ", compId, data[0].userid);
                response.send({
                    userID: data[0].userid,
                    compId, // company id khali bh aa sakti hai full bh aasskti hai.
                });
            } else {
                response.send({ error: "password did not match" });
            }
        }
    }

    async function getReview(request, response) {
        const { body } = request;
        const data = await authMediator.getReview({ ...body });
        response.send(data);
    }

    return {
        test,
        insertEmpDataIntoDB,
        CreateUser,
        CompanyDetails,
        CheckUser,
        getReview,
    };
};
