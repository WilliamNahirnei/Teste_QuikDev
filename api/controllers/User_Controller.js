const UserSchema = require('../model/user')
const mongoose = require('mongoose')

module.exports = app => {

    const getUsers = async (req, res) => {
        try {
            const User = mongoose.model("users", UserSchema)
            const userList = await User.find()
            res.status(200).json(userList).send()
                        
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }

    }

    const getUser = async (req, res) => {
        try {
            const idUser = req.params.id
            const User = mongoose.model("users", UserSchema)
            const usuarioPesquisado = await User.findById(idUser)
            res.status(200).json(usuarioPesquisado).send()
                        
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }

    }

    const insertUser = async (req, res) => {
        try {
            
            const reqData = { ...req.body }
            const User = mongoose.model("users", UserSchema)
            const newUser = await User({
                name : reqData.name,
                username : reqData.username,
                birtdate : reqData.birtdate,
                address : reqData.birtdate,
                addressNumber : reqData.addressNumber,
                primayPhone : reqData.primayPhone,
                description : reqData.description,
                createdAt : ""
            })
            await newUser.save();
            res.status(200).json(newUser).send()
                        
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }

    }

    const updateUser = async (req, res) => {
        try {
            const reqData = { ...req.body }
            const idUser = req.params.id
            const User = mongoose.model("users", UserSchema)
            const usuarioPesquisado = await User.findByIdAndUpdate(idUser,{    "name": "nome1",
                name : reqData.name,
                username : reqData.username,
                birtdate : reqData.birtdate,
                address : reqData.birtdate,
                addressNumber : reqData.addressNumber,
                primayPhone : reqData.primayPhone,
                description : reqData.description
            })
            res.status(200).json(usuarioPesquisado).send()
                        
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }

    }

    const deleteUser = async (req, res) => {
        try {
            const idUser = req.params.id
            const User = mongoose.model("users", UserSchema)
            const usuarioPesquisado = await User.findByIdAndDelete(idUser)
            res.status(200).json(usuarioPesquisado).send()
                        
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }

    }



    return {getUsers, getUser, insertUser,updateUser,deleteUser}
}