const server = require('../index')
const request = require('supertest')

let userTest = {
    "name": "name teste",
    "username": "usernameTeste",
    "birtdate": "27/11/2929",
    "address": "rua yz",
    "addressNumber": "1414",
    "primayPhone": "42988832772",
    "description": "asdasd"
}

async function limpraBD(){
const response = await request(server)
        .get('/user')
        .send()
    response.body.forEach(async element => {
        await request(server)
                .delete(`/user/${element._id}`)
                .send(userTest)
                
    });    
}


describe('Users tests', () => {

    it('must return a new user', async () => {
        await limpraBD()

        const response = await request(server)
        .post('/user')
        .send(userTest)
        
        expect(response.status).toBe(201)
        expect(response.body.name).toBe("name teste")    
        expect(response.body.username).toBe("usernameTeste")
        expect(response.body.birtdate).toBe("27/11/2929")
        expect(response.body.address).toBe("rua yz")
        expect(response.body.addressNumber).toBe("1414")
        expect(response.body.primayPhone).toBe("42988832772")
        expect(response.body.description).toBe("asdasd")

        userTest = response.body
    })

    it('must change user data', async () => {

        userTest.name = "Nome de teste atualizado"
        userTest.description = "Uma descrição atualizada"

        const response = await request(server)
        .put(`/user/${userTest._id}`)
        .send(userTest)
        
        expect(response.status).toBe(200)
        expect(response.body.name).toBe("Nome de teste atualizado")
        expect(response.body.description).toBe("Uma descrição atualizada")
    })

    it('returns a specific user', async () => {
        const response = await request(server)
            .get(`/user/${userTest._id}`)
            .send()
            console.log(response.body)
        expect(response.status).toBe(200)
        expect(response.body).toBe(userTest)
        
    })

//     it('should return a list of users', async () => {
//         const response = await request(server)
//             .get('/user')
//             .send({
//             })

//         expect(response.status).toBe(200)
//         //expect(response.body.user.name).toBe("name test")
        
//     })

})