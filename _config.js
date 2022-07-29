var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://wakoigi:<C0lombus01@>@cluster0.oyjbt.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://wakoigi:<C0lombus01@>@cluster0.oyjbt.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://wakoigi:<password>@cluster0.oyjbt.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
