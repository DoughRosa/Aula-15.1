// Vamos criar um programa para gerenciar os animais de zoologico. Para isso considere os itens a baixo :
// a-) Crie uma lista para armazenar os animais
// b-) Crie um novo animal com as seguintes propriedades : nome, cor, peso, pais_origem, alimentacao, idade
// c-) Crie 5 animais a partir de uma cópia do animal do item anterior ;
// d-) Guarde esses animais na lista de animais ;
// e-) Mude o nome do terceiro animal e do quarto;
// f-) Imprima as informacoes do segundo animal da lista.
// g-) Imprima os dados atualizados do terceiro animal da lista.

let zoologico = [];

let gatoDomestico = {
    nome: 'Janaína',
    cor: 'preto',
    peso: '7kg',
    pais_origem: 'Brasil',
    alimentacao: 'carnivora',
    idade: '15 anos',
};

let cachorro = {...gatoDomestico};
cachorro.nome = 'Guaipeca';
cachorro.cor = 'caramelo';
cachorro.peso = '12kg';
cachorro.pais_origem = 'Brasil';
cachorro.alimentacao = 'onivora';
cachorro.idade = '20 anos';

let caracol = {...gatoDomestico};
caracol.nome = 'Speedy';
caracol.cor = 'marrom';
caracol.peso = '3gramas';
caracol.pais_origem = 'frança';
caracol.alimentacao = 'herbivora';
caracol.idade = '3 anos';

let mamute = {...mamute};
mamute.nome = 'Manfred';
mamute.cor = 'marrom';
mamute.peso = '1 tonelada';
mamute.pais_origem = 'Estados Unidos';
mamute.alimentacao = 'herbivora';
mamute.idade = '50 anos';



zoologico.push(gatoDomestico, cachorro, caracol, mamute);