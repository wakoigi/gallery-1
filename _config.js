var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://sprintech:sprintech@sprintech.qf4jkk2.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://sprintech:sprintech@sprintech.qf4jkk2.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
