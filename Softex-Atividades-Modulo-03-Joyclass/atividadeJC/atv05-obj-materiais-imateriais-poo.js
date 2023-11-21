const { before } = require("node:test");

class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.velocidadeAtual = 0;
  }
  acelerar(velocidade) {
    this.velocidadeAtual += velocidade;
  }

  frear() {
    this.velocidadeAtual = 0;
  }

  ligar() {
    return "Carro ligado";
  }
}

const meuCarro = new Carro("ford", "Mustang", 1967);

meuCarro.acelerar(70);
console.log(meuCarro.velocidadeAtual);

//segundo objeto material

class Feline {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
  run() {
    return console.log(`${this.name} está correndo`);
  }
  eat() {
    console.log(`${this.name} está comendo`);
  }
  meow() {
    console.log(`${this.name} está miando`);
  }
}

const cat1 = new Feline("Beterraba", "vira-lata", 3);
cat1.eat();

// Objeto imaterial

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  login() {
    console.log(`${this.name} Fez loguin`);
  }
  logout() {
    console.log(`${this.name} Fez logout`);
  }
  resetPassword() {
    console.log(`${this.name} Mudou a senha`);
  }
}
const user1 = new User("carlos", "carlos@email.com", 1234);

user1.login();

console.log(user1)

// Objeto imaterial 02


class Aluno {
  constructor(name, age, enroll){
    this.name = name;
    this.age = age;
    this.enroll = enroll;
  }
  study() {
    console.log(`${this.name} está estudando`);
  }

  playground() {
    console.log(`${this.name} está recreando`);
  }

  takingTest() {
    console.log(`${this.name} está fazendo a prova`);
  }
}

const aluno1 = new Aluno("carlos", 20, "1234");

aluno1.study();  
aluno1.playground();  
aluno1.takingTest();  

