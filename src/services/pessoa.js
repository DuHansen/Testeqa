const RepositorioExercicio= require("../repositories/pessoa.js")

const repositorio = new RepositorioExercicio()
class ServicoExercicio {

    async PegarUm(id){
      if(!id || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }
      return repositorio.PegarUm(id)
    }

    async PegarTodos(){
      return repositorio.PegarTodos()
    }
    
    async Adicionar(pessoa){
      const { nome, email, senha } = pessoa;
      
      if(id === undefined || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }

      if (nome === undefined) {
        throw new Error('Nome é obrigatório');
      }

      if (email === undefined) {
        throw new Error('Email é obrigatório');
      }

      if (senha === undefined) {
        throw new Error('Senha é obrigatória');
      }

      if(!email.includes('@')) {
        throw new Error("Colocar email valido!");
      }
      // Validação do nome
      if(nome.length < 3) {
        throw new Error("O nome deve ter pelo menos 3 caracteres!");
      }
    
      // Validação da senha
      if(senha.length < 7) {
        throw new Error("A senha deve ter pelo menos 7 caracteres!");
      }
    
      // Validação da senha com caractere especial
      const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if(!specialChar.test(senha)) {
        throw new Error("A senha deve conter pelo menos um caractere especial!");
      }
      
      try {
        return await repositorio.Adicionar(pessoa)
      } catch (error) {
        if(error.parent && error.parent.code === "ER_DUP_ENTRY") {
          throw new Error("Email já cadastrado!");
        } else {
          throw error;
        }
      }
      /*// Verificar se o email já existe no repositório
            const pessoaExistente = await repositorio.BuscarPorEmail(email);
            if (pessoaExistente) {
              throw new Error("Email já cadastrado!");
            }

            // Se o email não existir, adicione a nova pessoa
            return await repositorio.Adicionar(pessoa);*/ 
    }          

    async Alterar(id, pessoa){
      const { nome, email, senha } = pessoa;

      if(id === undefined || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }

      if (nome === undefined) {
        throw new Error('Nome é obrigatório');
      }

      if (email === undefined) {
        throw new Error('Email é obrigatório');
      }

      if (senha === undefined) {
        throw new Error('Senha é obrigatória');
      }
      // Validação do email
      if(email === '@') {
        throw new Error("Colocar email valido!");
      }
      // Validação do nome
      if(nome.length < 3) {
        throw new Error("O nome deve ter pelo menos 3 caracteres!");
      }
    
      // Validação da senha
      if(senha.length < 7) {
        throw new Error("A senha deve ter pelo menos 7 caracteres!");
      }
    
      // Validação da senha com caractere especial
      const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if(!specialChar.test(senha)) {
        throw new Error("A senha deve conter pelo menos um caractere especial!");
      }
      return repositorio.Alterar(id, pessoa)  // passando os novos dados para o repositório
    }
    

    async Deletar(id){
      if(!id || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }

      return repositorio.Deletar(id)
    }

}
module.exports = ServicoExercicio