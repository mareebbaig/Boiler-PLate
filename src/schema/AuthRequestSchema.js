module.exports = function AuthRequestSchema(opts) {
    const { authRequestHandlers, Joi } = opts;

    // const verifyAuthOtvc = () => {
    //     return {
    //         method: 'POST',
    //         schema: {
    //             body: Joi.object().keys({
    //                 otvc: Joi.string().required(),
    //                 phone: Joi.string().required(),
    //             })
    //         },
    //         url: '/verify/auth/otvc',
    //         handler: authRequestHandlers.verifyAuthOtvc,
    //     }
    // }

    const reqtest = () => {
        return {
            method: "POST",
            url: "/test",
            handler: authRequestHandlers.test,
        };
    };
    const reqInsertEmpData = () => {
        return {
            method: "POST",
            schema: {
                body: Joi.object().keys({
                    emp_id: Joi.string().required(),
                    username: Joi.string().required(),
                    review: Joi.string().required(),
                }),
            },
            url: "/InsertEmpData",
            handler: authRequestHandlers.insertEmpDataIntoDB,
        };
    };

    const SignUp = () => {
        return {
            method: "POST",
            schema: {
                body: Joi.object().keys({
                    username: Joi.string().required(),
                    password: Joi.string().required(), // agey password hasing k liye use krna hai.
                    email: Joi.string().required().email(),
                    company_name: Joi.string().required(),
                    city: Joi.string().required(),
                }),
            },
            url: "/Signup",
            handler: authRequestHandlers.CreateUser,
        };
    };

    const Login = () => {
        return {
            method: "POST",
            schema: {
                body: Joi.object().keys({
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                }),
            },
            url: "/Login",
            handler: authRequestHandlers.CheckUser,
        };
    };

    const getReview = () => {
        return {
            method: "POST",
            schema: {
                body: Joi.object().keys({
                    company_name: Joi.string().required(),
                }),
            },
            url: "/getReview",
            handler: authRequestHandlers.getReview,
        };
    };

    return {
        reqtest,
        reqInsertEmpData,
        SignUp,
        Login,
        getReview,
    };
};
