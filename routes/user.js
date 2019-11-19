//Dependencies
const express = require('express');
const { CreateUser, loginUser } = require('../services/userServices')
const { validateUser } = require('../validator/postValidator')
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.post('/register', (req, res) => {


    let { error } = validateUser(req.body);
    if (!error) {
        let result = CreateUser(req.body);
        try {
            let output = {
                message: 'User Created',
                data: result
            }
            res.send(output)
        }
        catch (e) {
            res.send(e.message)
        }
    } else {
        res.send(error.message)
    }

})

router.post('/login', async (req, res) => {
    let result = await loginUser(req.body);
    try {
        res.header("x-access-token", result.token).send({
            message: result.message,
            token: result.token
        })
    }
    catch (e) {
        res.send(e.message)
    }
})


module.exports = router;