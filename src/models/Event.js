const driver = require('../config/database/config');
class Event {

    constructor() {
        this.session = driver.session();
        this.schema = this.getSchema();
    }

    async find(id) {
        const data = await this.session.run(`
        match (n:Event) 
        WHERE id(n) = ${id}
        return n
        `)
        const event = data.records[0]._fields[0].properties
        this.schema.name = event.name;
        this.schema.date = event.date;
        this.schema.start_time = event.start_time;
        this.schema.description = event.description;
        this.schema.id = data.records[0]._fields[0].identity.low
        // console.log(this.schema)

        return this.schema;
    }
    async get() {
        const data = await this.session.run(`
        MATCH (n:Event) 
        RETURN n
        LIMIT 20
        `)
        const event = data.records[0]._fields[0].properties
        this.schema.name = event.name;
        this.schema.date = event.date;
        this.schema.start_time = event.start_time;
        this.schema.description = event.description;
        this.schema.id = data.records[0]._fields[0].identity.low
        // console.log(this.schema)

        return this.schema;
    }

    getSchema() {


        return {
            'name': "",
            'date': "",
            'start_time': "",
            'description': "",
            'id' : ""

        }

    }

}




module.exports = Event;