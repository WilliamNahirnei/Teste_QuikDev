module.exports = app => {

    const getUsers = async (req, res) => {
        try {
            const reqData = { ...req.body }
                        res.status(200).json({}).send()
                        
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }

    }

    const getUser = async (req, res) => {
        try {
            const reqData = { ...req.body }
                        res.status(200).json({}).send()
                        
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }

    }

    const insertUser = async (req, res) => {
        try {
            const reqData = { ...req.body }
                        res.status(200).json({}).send()
                        
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }

    }

    const updateUser = async (req, res) => {
        try {
            const reqData = { ...req.body }
                        res.status(200).json({}).send()
                        
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }

    }

    const deleteUser = async (req, res) => {
        try {
            const reqData = { ...req.body }
                        res.status(200).json({}).send()
                        
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }

    }



    return {getUsers, getUser, insertUser,updateUser,deleteUser}
}