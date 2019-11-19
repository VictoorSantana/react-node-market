//Joi 
const Joi = require('@hapi/joi');

module.exports = {
    validateBody: (schema) => {
        return (req,res,next) => {
            const { error, value } = schema.validate( req.body );

            if(error !== undefined) {
                return res.status(400).json(error);
            }

            next();
        }
    },
    validateTokenAlso: (schema) => {
        return (req,res,next) => {
            const bearerHeader = req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined') {

                const {error , value} = schema.validate( req.body );
                
                const bearer = bearerHeader.split(' ');
                const bearerToken = bearer[1];

                if(error !== undefined) {                    
                    return res.status(400).json(error);
                } else {                                        
                    req.token = bearerToken;
                }         
                
                next();

            }else {
                res.sendStatus(403); //Forbidden
            }            

        }
    },
    schemas: {
        loginSchema: Joi.object({
            user: Joi.string().required(),
            pass: Joi.string().required()
        }),
        productSchema: Joi.object({
            _id: Joi.string(),
            disc: Joi.string().required(),
            price: Joi.number().required(),
            amount: Joi.number().required(),
            discount: Joi.number().required()
        })
    }
}