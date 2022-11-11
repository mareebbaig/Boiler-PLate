module.exports = function AuthRequestHandlers(opts) {
    const { authMediator } = opts;

    async function test(request, reply) {
        const { body } = request;
        console.log("test");
        const sent = await authMediator.test({ ...body });
        console.log(sent);
        reply.send(JSON.stringify(sent));
    }
    return {
        test,
    };
};
