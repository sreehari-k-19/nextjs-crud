import users from "../models/user"


export async function getUsers(req, res) {
    try {
        const userDetails = await users.find({})
        if (!userDetails) return res.status(404).res.json({ error: "Data not found" })
        res.status(200).json( userDetails )
    } catch (error) {
        res.status(404).json({ error: "Data fetching error" })
    }

}

export async function userById(req, res) {
    try {
        const { userId } = req.query
        console.log(userId)
        if (userId) {
            console.log("userr")
            let user = await users.findById(userId)
            console.log(user,"userr")
            res.status(200).json(user)
        }

    } catch (error) {
        res.status(404).json({ error: "cannot get the user" })
    }
}

export async function postUser(req, res) {
    try {
        console.log(req.body,"usssss")
        const formData = req.body
        if (!formData) return res.status(404).json({ error: "Data not found" })
        users.create(formData, (err, data) => {
            console.log(data)
            return res.status(200).json(data)
        })
    } catch (error) {
        console.log(error)
        res.status(404).json(error)

    }
}

export async function updateUser(req, res) {
    try {
        const { userId } = req.query
        const formData = req.body
        if (userId && formData) {
            let user = await users.findByIdAndUpdate(userId, formData)
            return res.status(200).json(user)
        }
        return res.status(404).json({ error: "User not selected" })
    } catch (error) {
        return res.status(404).json({ error: "Updation error" })
    }
}

export async function deleteUser(req, res) {
    try {
        const { userId } = req.query
        if (userId) {
            let user = await users.findOneAndDelete(userId)
            return res.status(200).json({ deleted: userId })
        }
    } catch (error) {
        return res.status(404).json({ error: "Deletion error" })
    }
}