import { executeQuery } from "../../config/db"

const getUsers = async (req, res) => {
    try {
        let users = await executeQuery('SELECT * FROM user_master WHERE 1', [])
        res.status(200).send(users)
        
    } catch (error) {
        res.status(500).send(error)
    }
}
export {getUsers}