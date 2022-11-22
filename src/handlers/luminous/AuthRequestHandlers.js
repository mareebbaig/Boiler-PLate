const P = require("pino");

module.exports = function AuthRequestHandlers(opts) {
    const { authMediator, uuid, bcrypt, jwt, jwtFile } = opts;

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
        const userId = uuid();
        const res = await authMediator.CreateUser({
            userId,
            email,
            username,
            hashedPassword,
        });
        const secret = Buffer.from(
            "62197fc8886bd3b739dd2cc8aa109d0be93acdea64c07b8908168b80daf1dc47",
            "hex"
        );
        const payload = {
            username,
            email,
            hashedPassword,
        };
        const encryptedJwt = await jwtFile.generateJWT(
            "testsub",
            payload,
            secret
        );
        response.send({ res: res[0], jwt: encryptedJwt });
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

    async function CheckUser(request, response) {
        const { email, password } = request.body;

        const data = await authMediator.GetUser(email);
        console.log("ye aya hai data base se: ", data);
        if (!data.length) {
            response.send(data); // response khali return horha hai yahan pe.
        } else {
            if (bcrypt.compareSync(password, data[0].password)) {
                const compId = await authMediator.GetCompanyId(data[0].userid);
                const secret = Buffer.from(
                    "62197fc8886bd3b739dd2cc8aa109d0be93acdea64c07b8908168b80daf1dc47",
                    "hex"
                );
                const payload = {
                    name: data[0].username,
                    email: data[0].email,
                    password: data[0].password,
                };
                const encryptedJwt = await jwtFile.generateJWT(
                    "testsub",
                    payload,
                    secret
                );
                response.send({
                    userid: data[0].userid,
                    username: data[0].username,
                    email: data[0].email,
                    compid: compId[0].compid,

                    // JWT: encryptedJwt,
                });
            } else {
                response.send({ error: "password did not match" });
            }
        }
    }

    async function GetCompanies(request, response) {
        const data = await authMediator.GetCompanies();
        response.send(data);
    }

    async function getReview(request, response) {
        const { body } = request;
        const data = await authMediator.getReview({ ...body });
        console.log("database se ye aya hai: ", data);
        response.send(data);
    }

    return {
        test,
        insertEmpDataIntoDB,
        CreateUser,
        CompanyDetails,
        CheckUser,
        GetCompanies,
        getReview,
    };
};
