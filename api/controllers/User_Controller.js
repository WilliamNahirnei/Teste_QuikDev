require('../validation/userValidation')
const UserSchema = require('../model/user')
const mongoose = require('mongoose')
const exist = require('../validation/userValidation')

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
            if (mongoose.Types.ObjectId.isValid(idUser)) {
                const User = mongoose.model("users", UserSchema)
                const wantedUser = await User.findById(idUser)
                if (wantedUser)
                    res.status(200).json(wantedUser).send()
                else
                    res.status(404).send("USER NOT FOUND")
            }
            else
                res.status(400).send("BAD PARAM FORMAT")
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }
    }

    const insertUser = async (req, res) => {
        try {
            const reqData = { ...req.body }
            const idUser = req.params.id
            if (exist(reqData)) {
                const User = mongoose.model("users", UserSchema)
                const newUser = await User({
                    name: reqData.name,
                    username: reqData.username,
                    birtdate: reqData.birtdate,
                    address: reqData.address,
                    addressNumber: reqData.addressNumber,
                    primayPhone: reqData.primayPhone,
                    description: reqData.description,
                    createdAt: await new Date().toString()
                })
                await newUser.save();
                res.status(201).json(newUser).send()
            }
            else
                res.status(400).send('BAD PARAMS')
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }
    }

    const updateUser = async (req, res) => {
        try {
            const reqData = { ...req.body }
            const idUser = req.params.id
            if (mongoose.Types.ObjectId.isValid(idUser)) {
                if (exist(reqData)) {
                    const User = mongoose.model("users", UserSchema)
                    let wantedUser = await User.findByIdAndUpdate(idUser, {
                        name: reqData.name,
                        username: reqData.username,
                        birtdate: reqData.birtdate,
                        address: reqData.birtdate,
                        addressNumber: reqData.addressNumber,
                        primayPhone: reqData.primayPhone,
                        description: reqData.description
                    })
                    wantedUser = await User.findById(idUser)
                    if(wantedUser)
                        res.status(200).json(wantedUser).send()
                    else
                        res.status(404).send("USER NOT FOUND")
                }
                else
                    res.status(400).send('BAD PARAMS')
            }
            else
                res.status(400).send("BAD PARAM FORMAT")
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }
    }

    const deleteUser = async (req, res) => {
        try {
            const idUser = req.params.id
            console.log(idUser)
            if (mongoose.Types.ObjectId.isValid(idUser)) {
                const User = mongoose.model("users", UserSchema)
                const wantedUser = await User.findByIdAndDelete(idUser)
                if(wantedUser)
                    res.status(200).json(wantedUser).send()
                else
                    res.status(404).send()
            }
            else
                res.status(400).send("BAD PARAM FORMAT")
        } catch (error) {
            console.log(error)
            return res.status(500).send("INTERNAL SERVER ERROR:  ")
        }
    }



    return { getUsers, getUser, insertUser, updateUser, deleteUser }
}