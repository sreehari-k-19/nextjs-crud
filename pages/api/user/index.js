import { deleteUser, getUsers, postUser, updateUser } from "../../../controllers/user";
import MongooseConnect from "../../../Database/connection";


export default async function handler(req, res) {
    MongooseConnect().catch(() => res.status(405).json({ eror: "Database connection error" }))
    const { method } = req

    switch (method) {
        case 'GET': getUsers(req, res)
            break;
        case 'POST': postUser(req, res)
            break;
        case 'PUT': updateUser(req, res)
            break;
        case 'DELETE': deleteUser(req, res)
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} not Allowed`)
            break;
    }
}