module.exports = app => {
    app.route('/')
        .get((req, res)=>{res.send('hallo worde')})

    app.route('/user/:id')
        .get(app.api.controllers.User_Controller.getUser)
        .post(app.api.controllers.User_Controller.insertUser)
        .put(app.api.controllers.User_Controller.updateUser)
        .delete(app.api.controllers.User_Controller.deleteUser)
    app.route('/user')
        .get(app.api.controllers.User_Controller.getUsers)

}