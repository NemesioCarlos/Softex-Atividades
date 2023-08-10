class Pessoa {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.filho = null; // Referência ao próximo nó (filho)
    }
  }
  
  class ListaEncadeada {
    constructor() {
    this.cabeca = null; // Primeiro elemento da lista
    }
  
    adicionarPessoa(nome, idade) {
      const novaPessoa = new Pessoa(nome, idade);
  
      if (!this.cabeca) {
        this.cabeca = novaPessoa;
      } else {
        let atual = this.cabeca;
        while (atual.filho) {
          atual = atual.filho;
        }
        atual.filho = novaPessoa;
      }
    }
  
    exibirPessoas(){
    let atual = this.cabeca;
      while (atual) {
        console.log(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
        atual = atual.filho;
      }
    }
  }
  
  
  const listaPessoas = new ListaEncadeada();
  
  listaPessoas.adicionarPessoa("João", 30);
  listaPessoas.adicionarPessoa("Maria", 25);
  listaPessoas.adicionarPessoa("Carlos", 40);
  
    listaPessoas.exibirPessoas();