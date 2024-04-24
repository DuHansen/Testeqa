const Pessoa = require('../models/pessoa.js');

class RepositorioExercicio {
    
    async PegarUm(id){
        return Pessoa.findOne({
            where: {
                id
            }
        })
    }

    async PegarTodos(){
        return Pessoa.findAll()
    }

    async Adicionar(pessoa){
        const { nome, email, senha } = pessoa;
        return Pessoa.create({ nome, email, senha });
    }
    
    async Alterar(id, pessoa){
    const { nome, email, senha } = pessoa;
        return Pessoa.update(
            {
            nome: nome,
            email: email,
            senha: senha
        }, {
            where: {
                id: id
            }
        })
      }

    async Deletar(id){
    
        return Pessoa.destroy({
            where: {
                id
            }
        })}
/*
        async BuscarPorEmail(email){
            return Pessoa.findOne({
                where: {
                    email
                }
            })
        }*/
}

module.exports = RepositorioExercicio