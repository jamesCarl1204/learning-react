const {pool} = require('../config/db')

const crudModels = {
    
    async getUsers() {
        const [rows] = await pool.query(`SELECT * FROM users`);
        return rows
    },

    async insertUser(fname, lname, address) {
        const [result] = await pool.query(`INSERT INTO users (fname,lname,address) VALUES(?)`, [fname,lname, address])
    },

    async updateUser(id, address) { 
        const [result] = await pool.query(`UPDATE users SET address = ? WHERE id  = ?`, [id, address] )
        return result
    },

    async deleteUser(id) {
        const [result] = await pool.query(`DELETE FROM users WHERE id = ?`, [id])
        return result
    }
}

module.exports = crudModels