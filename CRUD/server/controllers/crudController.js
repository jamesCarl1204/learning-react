const {pool} = require('../config/db.js');
const crudModel = require('../models/crudModel.js')

const add_users = async (req,res) => {

    try{
    const {fname, lname, address} = req.body;

    await crudModel.insertUser(fname,lname,address);
    res.status(200).json({success: 'true', msg: 'user added'})
    } catch (err) {
        console.log(err)
    }
}

const get_users = async (req, res) => {
    try{
        const users = crudModel()

        res.status(200).json({success:true, data:users})
        
    }catch(err) {
        console.log(err)
    }
}


module.exports = {get_users, add_users}