const {pool} = require('../config/db.js');
const crudModel = require('../models/crudModel.js')

const add_users = async (req,res) => {

    try{
    const {fname, lname, address} = req.body;

    await crudModel.insertUser(fname,lname,address);
    res.status(200).json({success: 'true', msg: 'user added'})
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false, msg: err})
    }
}

const get_users = async (req, res) => {
    try{
        const users = await crudModel.getUsers()

        res.status(200).json({success:true, data:users})
        
    }catch(err) {
        console.log(err)
        res.status(400).json({success: false, msg: 'err'})
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await crudModel.deleteUser(id)
        if(result.affectedRows === 0) {
            return res.status(404).json({success: false, msg: 'user not found'})
        }
        res.status(200).json({success: true, msg:'user deleted'})
    } catch(err) {
        console.log(err)
    }
}

module.exports = {get_users, add_users, deleteUser}