const P = require("pino");

module.exports = function AuthRequestHandlers(opts) {
    const { authMediator } = opts;

    async function test(request, reply) {
        const { body } = request;
        console.log("test");
        const sent = await authMediator.test({ ...body });
        reply.send(JSON.stringify(sent));
    }

    async function insertEmpDataIntoDB(request, response) {
        const { body } = request;
        console.log(body);
        const responseFromDB = await authMediator.insertEmpDataIntoDB({
            ...body,
        });
        response.send(responseFromDB);
    }

    async function CreateUser(request, response) {
        const { body } = request;
        const res = await authMediator.InsertCompany({ ...body });
        const res1 = await authMediator.CreateUser({ ...body });
        response.send(res1);
    }

    async function CheckUser(request, response) {
        console.log("yahan agya hai");
        const { email, password } = request.body;
        const data = await authMediator.GetUser({ email });
        if (!data.length) {
            response.send({ error: "User is not registered, Sign Up first" });
        } else {
            if (password === data[0].password) {
                response.send({ message: "user signed in" });
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
        CheckUser,
        getReview,
    };
};
