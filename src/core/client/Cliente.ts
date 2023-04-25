export default class Cliente {
    #id: string;
    #nome: string;
    #idade: number;
    #email: string;
    #password: string;

    constructor(
        nome: string, 
        idade: number, 
        email: string,
        password: string,
        id: string = null
    ){
        this.#nome = nome
        this.#idade = idade
        this.#email = email
        this.#password = password
        this.#id = id
    }

    static vazio(){
        return new Cliente('', 0,'','')
    }

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    } 
    get idade(){
        return this.#idade
    }
    get email(){
        return this.#email
    }
    get password(){
        return this.#password
    }
}