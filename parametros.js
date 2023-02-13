// parâmetros de função

            //parâmetro 1, parâmetro 2
/*function soma(numero1, numero2) {
    return numero1 + numero2;
}*/

/*console.log(soma(100, 569)) //recebe dois argumentos
console.log(soma(123, 526))
console.log(soma(-100, 215))

//parâmetro x argumento


//ordem dos parâmetros

/*function nomeIdade (nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}*/

//console.log(nomeIdade("Aline", 25))

function soma(numero1 = 0, numero2 = 0) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)))