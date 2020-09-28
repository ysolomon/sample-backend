import express from "express";
import bodyParser from "body-parser";
import * as userRouter from './utils/userRouter';

var app = express();
var port = 3000;
var router = express.Router();

// Startup port, log to console
app.listen(process.env.PORT || port, () => console.log(`Sample-Backend listening on port ${process.env.PORT || port}!`));

// Allows for parsing of nested JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// BodyParser config needs to come before routers are exposed
app.use('/api', router);

router.get('/users', userRouter.getAllUsers);
router.get('/users/:id', userRouter.getSingleUser);
router.post('/users', userRouter.createSingleUser);
router.put('/users/:id', userRouter.updateSingleUser);
router.delete('/users/:id', userRouter.deleteSingleUser);

// GET request at app's home directory should return "Hello World!"
app.get('/', (request, response) => {
    response.send('Sample-Backend Hello World!')
});

module.exports = {app};