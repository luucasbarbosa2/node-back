const express = require('express');
const expressQL = require('express-graphql');
const schema = require('./queries/schema');
const resolvers = require('./queries/resolvers');


const app = express();


app.get('/', async (req, res) => {
    const Event = require('./models/Event');
    const event = new Event();
    console.log(await event.find(1));
    res.send(await event.find(1))
})

app.use('/graphql', expressQL({
    schema,
    rootValue: resolvers,
    graphiql: true,
}));

app.listen('3000', function(){
    console.log('Running on port 3000')
})