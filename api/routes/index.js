import userRouter from './user.js';
import gigRouter from './gig.js';
import messageRouter from './message.js';
import orderRouter from './order.js';
import reviewRouter from './review.js';
import conversationRouter from './conversation.js'
import authRouter from './auth.js'

function route(app) {
    app.use('/api/auth', authRouter)
    app.use('/api/users', userRouter);
    app.use('/api/gigs', gigRouter);
    app.use('/api/orders', orderRouter);
    app.use('/api/reviews',reviewRouter);
    app.use('/api/conversations',conversationRouter);
    app.use('/api/messages', messageRouter);
    
}

export default route;
