
const { buildSchema } = require('graphql');


const schema = buildSchema(`
type Events{
    name: String
    date: String
    start_time: String
    description: String
    location: Location
    id: Int
    answers: Answers
}

type Answers{
    interested: Int
    going: Int
    purchased: Int
}

type Location{
    latitude: String
    longitude: String
    address: Address
    name: String
    
}

type Address{
    neighborhood: String
    number: String
    city: String
    country: String
}

type User{
    name: String
    email: String
    username: String
    age: String
    id: String

}


type Query{
    user (id: Int!): User
    events(id: Int): Events
    Address(event_id: Int!): Address
    Location(event_id: Int!): Location
    Answers(event_id: Int!): Answers


    

    
}
`);


module.exports = schema;