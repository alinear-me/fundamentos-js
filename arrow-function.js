function oapresentar(nome) {
    return `meu nome é ${nome}`;
}

// Arrow function: não pdoe ser nomeada
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) =>  num1 + num2;

// arrow function + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "somente numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}

//Hoisting: Arrow function se comporta da mesma como expressão
