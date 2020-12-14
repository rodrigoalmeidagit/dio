// const arr = new Array(1, 2, 3);
// console.log(arr)

// const person = Array.of('Rodrigo', 'Carlos', 'Fernando');
// console.log(person)

// const arr = Array(3, 2, 4, 5)
// console.log(arr) 

/*Insere elemento no array

No início do array = .unshift
No fim do array = .push
*/

/*Remove elemento do array
No início do array = .shift
No fim do array = .pop
*/

// Concatenando um ou mais arrays, retornando um novo array (concat)(imutável)
const frutas = ['banana', 'melancia', 'uva'];
const salgados = ['coxinha', 'kibe', 'empada'];

const alimentos = console.log(frutas.concat(salgados));

// alimentos.forEach((alimentos, index) => console.log(index, alimentos));

// Slice - Retorna um novo array "fatiando" o array de acordo com o inicio e o fim (imutável)

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.slice(0, 2));
// console.log(arr.slice(2));
// console.log(arr.slice(-1));
// console.log(arr.slice(-3));

// Splice - Altera um array adicionando novos elementos enquanto remove elementos antigos(não é imutável, mexe no array)

const arr = [1, 2, 3, 4, 5];

console.log(arr.splice(2));

// primeiro parâmetro é o índice onde vai ser incluído no array
// segundo parâmetro é a quantidade de itens a remover a partir do índice 
// o terceiro parâmetro é o que vai ser includo do array.
// console.log(arr.splice(3, 0, 'first')); 
// console.log(arr)

// ITERANDO ELEMENTOS // 

// forEach - Iteração de cada item dentro de um array(imutável)

// const arr = [1, 2, 3, 4, 5];

// arr.forEach((value, index) => {
//     console.log(`${index}: ${value}`);
// });

// arr.forEach((value, index) => console.log(`${index}: ${value}`));

// Map - Retorna um novo array, de mesmo tamanho, iterando cada item de um array.

// const arr = [1, 2, 3, 4, 5];
// arr.map((value, index) => console.log(`Index ${index} = ${value}`));

// const salgados = ['coxinha', 'kibe', 'empada'];
// salgados.map((value, index) => console.log(`${index} - ${value}`));

/* Flat - Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a
profundidade especificada(depth)
O numero indicado no parâmetro indica a quantidade de arrays que serão concatenados.
*/

// const arr = [1, 2, [3, 4, 5, 7, [8, 9, 10]]];
// console.log(arr.flat(1)); // [ 1, 2, 3, 4, 5, 7, [ 8, 9, 10 ] ]
// console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 7, 8, 9, 10 ]

// Flatmap - Retorna um novo array assim como map e executa um flat de profundidade 1

// const arr = [1, 2, 3, 4, 5];

// arr.flatMap(value => [value * 2]); // [2, 4, 6, 8]
// arr.flatMap(value => [[value * 2]]); // [ [2], [4], [6], [8] ]

// Keys - Retorna um array iterador que contém as chaves para cada elemento do array.

// const arr = [1, 2, 3, 4, 5];

// const arrIterador = arr.keys();
// console.log(arrIterador.next()); // { value: 0, done: false }
// console.log(arrIterador.next()); // { value: 1, done: false }
// console.log(arrIterador.next()); // { value: 2, done: false }
// console.log(arrIterador.next()); // { value: 3, done: false }
// console.log(arrIterador.next()); // { value: 4, done: false }
// console.log(arrIterador.next()); // { value: undefined, done: true }

// Values - Retorna um array iterador que contém os valores para cada elemento do array.

// const arr = [1, 2, 3, 4];

// const arrIterador = arr.values();
// console.log(arrIterador.next()); // { value: 1, done: false }
// console.log(arrIterador.next()); // { value: 2, done: false }
// console.log(arrIterador.next()); // { value: 3, done: false }
// console.log(arrIterador.next()); // { value: 4, done: false }
// console.log(arrIterador.next()); // { value: undefined, done: true }

// Entries - Retorna um array iterador que contém os pares chaves/valor para cada elemento do array.

// const arr = [1, 2, 3, 4];

// const arrIterador = arr.entries();
// console.log(arrIterador.next()); // { value: [ 0, 1 ], done: false }
// console.log(arrIterador.next()); // { value: [ 1, 2 ], done: false }
// console.log(arrIterador.next()); // { value: [ 2, 3 ], done: false }
// console.log(arrIterador.next()); // { value: [ 3, 4 ], done: false }
// console.log(arrIterador.next()); // { value: undefined, done: true }

// BUSCANDO ELEMENTOS // 

// Find - Retorna o primeiro item de um array que satisfaz uma determinada condição.

// const arr = [1, 2, 3, 4];
// const firstGreaterThanTwo = arr.find(value => value > 3); // valor 4
// console.log(firstGreaterThanTwo)

// findIndex - Retorna o índice do primeiro item de um array que satisfaz uma determinada condição.

// const arr = [1, 2, 3, 4];
// const firstGreaterThanTwo = arr.findIndex(value => value > 2); // índice 2 
// console.log(firstGreaterThanTwo)

// filter - Retorna um novo array com todos os elementos que satisfazem a condição.

// const arr = [1, 2, 3, 4];
// const allValuesGreaterThanTwo = arr.filter(value => value > 2); // [3, 4]
// console.log(allValuesGreaterThanTwo)

// indexOf - Retorna o primeiro índice em que um elemento pode ser encontrado no array.

// const arr = [1, 3, 3, 4, 3];
// const firstIndexOfItem = arr.indexOf(3); 
// console.log(firstIndexOfItem) // 1 (a primeira ocorrência de 3 foi no índice 1)

// lastIndexOf - Retorna o último índice em que um elemento pode ser encontrado no array.

// const arr = [1, 3, 3, 4, 3];
// const lastIndexOfItem = arr.lastIndexOf(3); 
// console.log(lastIndexOfItem) // 4 (a última ocorrência de 3 foi no índice 4)

// includes - Retorna um booleano verificando se determinado elemento existe no array.

// const arr = [1, 3, 3, 4, 3];

// const hasItemOne = arr.includes(1);
// console.log(hasItemOne); // true

// const hasItemTwo = arr.includes(2);
// console.log(hasItemTwo); // false

// some - Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição.

// const arr = [1, 3, 3, 4, 3];

// const hasSomeEvenNumber = arr.some(value => value % 2 === 0);
// console.log(hasSomeEvenNumber) // true (numero 4)

// const students = [
//     {name: 'Rodrigo', grade: 7},
//     {name: 'João', grade: 5},
//     {name: 'Renato', grade: 4}
// ];
// console.log(students)

// var res = students.some(students => students.grade >= 7);
// console.log(res) // true

// var aluno = students.find(students => students.grade >= 7);
// console.log(aluno) // { name: 'Rodrigo', grade: 7 }

// var alunoIndex = students.findIndex(students => students.grade >= 7);
// console.log(alunoIndex) // 0

// every - Retorna um booleano verificando se todos os itens de um array satisfazem uma determinada condição.

// const arr = [1, 3, 3, 4, 3];

// const allEvenNumbers = arr.every(value => value % 2 === 0); // todos os números são pares?
// console.log(allEvenNumbers) // false 

// const students = [
//     {name: 'Rodrigo', grade: 7},
//     {name: 'João', grade: 5},
//     {name: 'Renato', grade: 4}
// ];
// console.log(students)

// var res = students.every(students => students.grade >= 7);
// console.log(res) // false (dois alunos não passaram)

// var aluno = students.find(students => students.grade >= 7);
// console.log(aluno) // { name: 'Rodrigo', grade: 7 }

// var alunoIndex = students.findIndex(students => students.grade >= 7);
// console.log(alunoIndex) // 0

// sort - Ordena os elementos de um array de acordo com a condição.

// const students = [
//     {name: 'Rodrigo', grade: 7},
//     {name: 'João', grade: 5},
//     {name: 'Renato', grade: 4}
// ];
// console.log(students)

// var res = students.sort((current, next) => current.grade - next.grade);
// console.log(res) // { name: 'Renato', grade: 4 }, { name: 'João', grade: 5 }, { name: 'Rodrigo', grade: 7 }

// var res = students.sort((current, next) => next.grade - current.grade);
// console.log(res) // { name: 'Rodrigo', grade: 7 }, { name: 'João', grade: 5 }, { name: 'Renato', grade: 4 }


// reverse - Inverte os elementos do array.

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reverse()) // [ 5, 4, 3, 2, 1 ]

// TRANSFORMAR EM OUTRO TIPO DE DADOS //

// join - Junta todos os elementos de um array, separados por um delimitador e retorna uma string.

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.join("-")); // 1-2-3-4-5

// reduce - Retorna um novo tipo de dado iterando cada posição de um array.

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.reduce((total, value) => total += value, 0)); // 15 

const students = [
{name: 'Rodrigo', grade: 7},
{name: 'João', grade: 5},
{name: 'Renato', grade: 4}
]
console.log(students.reduce((totalGrades, students) => totalGrades += students.grade, 0)); // 16
console.log(students.reduce((totalGrades, students) => totalGrades += students.grade, 0) / students.length) // 5.3333...
console.log(students.reduce((studentsNames, students) => studentsNames += students.name + ' ', ' ')) // Rodrigo João Renato
