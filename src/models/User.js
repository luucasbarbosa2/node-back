const driver = require('../config/database/config');
class Users {

    constructor() {
        this.session = driver.session();
        this.schema = this.getSchema();
    }

    async find(id){
        const data = await this.session.run(`
            MATCH (e:Person)
            WHERE id(e) = ${id}
            return e
        `) 
            const user = data.records[0]._fields[0].properties
            this.schema.name = user.name;
            this.schema.age = user.age;
            this.schema.username = user.username;
            this.schema.email = user.email;
            this.schema.id = data.records[0]._fields[0].identity.low            

        return this.schema;
    }


    getSchema() {
        return {
            'name': "Lucas",
            'age': "26",
            'username': "lucasbarbosa",
            'email': "luucasbarbosa@rmail",
            'arg': "1"
        }

    }

}




module.exports = Users;