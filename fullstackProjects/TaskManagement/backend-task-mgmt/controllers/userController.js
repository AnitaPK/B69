const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/userModel')


const BASE_URL = 'http://localhost:5010/upload/'

// http://localhost:5010/download/upload/1775624394280.jpeg


async function register(req, res) {
    console.log(req.body, req.file)
    const { name, email, password, contactNumber } = req.body
    const imgPATH =req.file ?  req.file.filename : null
    console.log(imgPATH, "%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    try {

        regUser = await User.findOne({ where: { email: email } })
        console.log(regUser)
        if (regUser) {
            res.status(400).send({ msg: "email already registered" })
        } else {
            const salt = await bcryptjs.genSalt(8)
            const hashPassword = await bcryptjs.hash(password, salt)

            newUser = await User.create({
                name: name,
                email: email,
                password: hashPassword,
                contactNumber: contactNumber,
                img_path: imgPATH
            })
            res.status(200).send({ success: true, msg: "registered successfully" })
        }
    } catch (error) {
        res.status(500).send({ success: false, msg: "Server Error" })

    }
}

async function login(req, res) {
    console.log(req.body)
    const { email, password } = req.body
    try {
        const alreadyUser = await User.findOne({ where: { email: email } })
        console.log(alreadyUser)
        if(!alreadyUser) {
            res.status(400).send({ msg: "User not found" })
        } else {
            checkPassword = await bcryptjs.compare(password, alreadyUser.password)
            console.log(checkPassword)
            if (!checkPassword) {
                res.status(400).send({ msg: "Invalid Password" })
            } else {
                const ID = alreadyUser.id
                const role = alreadyUser.role
                console.log(ID,"******ID")
                const genToken = jwt.sign({ ID: ID,role:role }, process.env.SECREAT_KEY, { expiresIn: "1hr" })
                console.log(genToken,"******")
                res.status(202).send({success:true, msg: "Login successful", token: genToken })
            }
        }
    } catch (error) {
        res.status(500).send({ success: false, msg: "Server Error" })

    }
}

async function getUserInfo(req, res) {

    try {
        const ID = req.user.ID
        const loggedUserInfo = await User.findByPk(ID, {
            attributes: {
                exclude: ["password"]
            }
        })
        console.log("$$$$$$$$$$$$",loggedUserInfo)

        const loggedUserInfoSTR=loggedUserInfo.toJSON()
        loggedUserInfoSTR.img_path =loggedUserInfo.img_path ? BASE_URL+loggedUserInfo.img_path : null
        console.log("***********",loggedUserInfoSTR)
        res.status(200).send({ user: loggedUserInfoSTR, success: true })
    } catch (error) {
        res.status(500).send({ success: false, msg: "Server Error" })

    }
}

function updateUser(req,res){
    try{
        res.status(200).send({success:true})
    }catch (error) {
        res.status(500).send({ success: false, msg: "Server Error" })

    }
}


async function getAllUsers(req,res){
        try{
        const allUsers = await User.findAll({
            attributes: ['id', 'name']
        })
        res.status(200).send({success:true,allUsers:allUsers})
    }catch (error) {
        res.status(500).send({ success: false, msg: "Server Error" })

    }
}

module.exports = {
    register,
    login,
    getUserInfo,
    updateUser,
    getAllUsers
}


// {
//     "name":"John",
//     "email":"john@gmail.com",
//     "password":"john123",
//     "contactNumber":"1234567890"
// }