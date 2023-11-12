import userRouter from './user.js';

function route(app) {
    app.use('api/user', userRouter);
}
export default route;
