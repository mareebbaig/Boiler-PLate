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
                    username: Joi.string().required(),
                    review: Joi.string().required(),
                    userId: Joi.string().required(),
                    compId: Joi.string().required(),
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
                }),
            },
            url: "/Signup",
            handler: authRequestHandlers.CreateUser,
        };
    };

    const CompanyDetals = () => {
        return {
            method: "POST",
            schema: {
                company_name: Joi.string().required(),
                city: Joi.string().required(),
            },
            url: "/Signup/CompanyDetails",
            handler: authRequestHandlers.CompanyDetails,
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
        CompanyDetals,
        Login,
        getReview,
    };
};
