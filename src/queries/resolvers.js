


const resolvers =  {
    
    async user(obj, args, context, info) {
        User = require('../models/User');
        User = new User();
        return await User.find(obj.id);
    },

    async events(obj, args, context, info){
        Event = require('../models/Event');
        Event = new Event();
        if(obj.id){
            e = await Event.find(obj.id);
            e.name = obj.id
            // await Event.get(obj.id);

            return e
        }
        return await Event.get();

        
    }
};


module.exports = resolvers;