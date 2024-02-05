function Media(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3)/3;
    return `Nota = ${media.toFixed(1)} : ` + ((media > 7.5) ? "Aprovado" : `${
        (media < 5) ? "Reprovado" : "Em Recuperação"
    }`);

}
class registroIMC{
    imc;
    nota;
    constructor(imc, nota){
        this.imc = imc;
        this.nota = nota;
    }
}
class pessoa{
    nome;
    idade;
    peso;
    altura;
    imc;
    constructor(nome, idade, peso, altura){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.calularIMC();
    }
    aniversario() {
        this.idade++;
    }
    alterar_valores(idade){
        this.idade;
    }
    alterar_valores(peso, altura){
        this.peso = peso;
        this.altura = altura;
        this.calularIMC();
    }
    alterar_valores(idade, peso, altura){
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.calularIMC();
    }
    calularIMC(){
        let imc = this.peso/(this.altura**2);
        if(imc < 18.5) this.imc = new registroIMC(imc.toFixed(2), "Abaixo do Peso");
        else if(imc < 25) this.imc = new registroIMC(imc.toFixed(2), "Peso Normal");
        else if(imc < 30) this.imc = new registroIMC(imc.toFixed(2), "Acima do Peso");
        else if(imc < 40) this.imc = new registroIMC(imc.toFixed(2), "Obeso");
        else this.imc = new registroIMC(imc.toFixed(2), "Obesidade Grave");
    }
    mostrarIMC(){
        return `=============\nNome: ${this.nome}\n`+
            `Idade: ${this.idade}\n` +
            `IMC: ${this.imc.imc}\n` +
            `MSG: ${this.imc.nota}\n=============`;
    }
}


function Pagamento(preco, metodo){
    switch (metodo){
        case 1:
            return preco*0.9;
            break;
        case 2:
            return preco*0.85;
            break;
        case 3:
            return preco;
            break;
        case 4:
            return preco*1.1;
            break;
        default:
            return -1;
            break;
    }
}
(function (){
    console.log(Media(10, 8.5, 6.3));
    let p1 = new pessoa("Lukas", "27", 71.3, 1.77);
    console.log(p1.mostrarIMC());
    console.log("Preço final = " + Pagamento(12.50, 4).toFixed(2));

    const {CallCounter} = require(`./callcounter`);
    const call1 = new CallCounter([1, 5, 10, 50, 100]);
    for(let i = 0; i < 10; i++){
        console.log(call1.call());
    }

})();
