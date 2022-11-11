module.exports = function SvcTalos(opts) {
    const { svcCache, queryHandler, mdlTest, db } = opts;
    async function getFromDB({ phone }) {
        //const token = await svcCache.getKV({ key: 'ELRP_TOKEN' });
        console.log(phone);
        //mdlTest(phone);
        const result = await db["primary"].any(mdlTest.query, "");
        const response = result;
        console.log(response);
        return response;
    }
    return {
        getFromDB,
    };
    return {
        getFromDB,
    };
};
