module.exports = function AuthMediator(opts) {
    const { svcTalos } = opts;

    async function test({ phone }) {
        let account = "hello";

        //  number = sanitizePhoneNumber({ phone: number });
        account = await svcTalos.getFromDB({ phone: phone });
        return account;
    }

    return {
        test,
    };
};
