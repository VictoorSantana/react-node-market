const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const monk = require('monk');
const { validateBody, schemas, validateTokenAlso } = require('./helper/Validation');

const db = monk('localhost/mydb');
const users = db.get('users');
const products = db.get('products');


app.use(express.json());
app.use(cors());

/*
app.get('/', (req,res) => {
    res.json({message: 'its ok'});
});
*/


app.post('/login', validateBody(schemas.loginSchema), (req,res) => {

        const reqUser = {
            user: req.body.user.trim().toString(),
            pass: req.body.pass.trim().toString()
        };

        users.findOne(reqUser).then((doc) => {
            if(doc !== null) {

                jwt.sign({userid: doc._id}, 'seckit', {expiresIn: '1000s'}, (err, token) => {
                    res.json({
                        message: 'wellcome!',
                        token: token
                    });
                });

            }else {
                res.json({
                    message: 'Wrong password',
                    token: ''
                });
            }
        });
});


app.post('/productadd', validateTokenAlso(schemas.productSchema), (req, res) => {        
    jwt.verify(req.token, 'seckit', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            const product = {
                disc: req.body.disc,
                price: req.body.price,
                amount: req.body.amount,
                discount: req.body.discount
            };
            products.insert(product);
            res.json({
                message: 'the data was added fine'
            });
        }
    });

});

app.listen(5000, () => {
    console.log('Listening server NodeJs');
});