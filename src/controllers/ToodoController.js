const knex = require('../database')

module.exports = {
    async index(req,res){
        const toodos = await knex('toodo')
        return res.json(toodos);
    },

    async create (req, res, next){
        try {
            const { title } = req.body;
            const { content } = req.body;

            await knex('toodo').insert({
                title,
                content
            });
            
            return res.status(201).send({message:'Toodo added'}); 

        } catch (error) {
            next(error);
        }
    },

    async update (req, res, next){
        try {
            const { title } = req.body;
            const { content } = req.body;
            const { id } = req.params;

            await knex('toodo')
            .update({ title, content})
            .where({ id });

            return res.status(200).send({message: "Updated"})

        } catch (error) {
            next(error);
        }
    },

    async delete(req, res, next) {//deletar
        try {
            const { id } = req.params;

            await knex('toodo')
            .where({ id }).delete();
            

            return res.status(201).send({message: 'Deleted'});
        } catch (error) {
            next(error);
        }
    }
    
}