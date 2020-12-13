// let string = 'Rodrigo Almeida'

// let newString = string.length
// console.log(newString);

// let newString2 = string.replace('Rodrigo', 'João');
// console.log(newString2)

// let newString3 = 'Rodrigo'.split('r');
// console.log(newString3)

// let newString4 = string.slice(-5)
// console.log(newString4)

// let newString5 = string.slice(3, -1)
// console.log(newString5)

// let newString6 = string.substr(0, 7)
// console.log(newString6)

// let newString7 = string.slice(1)
// console.log(newString7)

// const myNumber = 12.4032;
// console.log(typeof myNumber);

// const numberAsString = myNumber.toString();
// console.log(numberAsString, typeof numberAsString);

// const fixedTwoDecimals = myNumber.toFixed(3);
// console.log(fixedTwoDecimals);

// console.log(parseFloat('13.22'));
// console.log(parseInt('13.20'));

// const nullVariable = null;
// console.log(nullVariable, typeof nullVariable)

// const undefinedVar = undefined;
// console.log(typeof undefinedVar)

// let user = {
//     name: 'Rodrigo'
// };

// //Alterando a propriedade de um objeto
// user.name = 'Outro nome 1';
// console.log(user);
// user['name'] = 'Outro nome 2';
// console.log(user);

// // criando nova propriedade
// user.lastName = 'Almeida'

// // deletando uma propriedade
// delete user.name;
// console.log(user);

// const newUser = {
//     name: 'Rodrigo',
//     lastName: 'Almeida'
// }
// // Recupera chaves do objeto
// console.log(Object.keys(newUser));

// // Recupera valores do objeto
// console.log(Object.values(newUser));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
// console.log(Object.entries(newUser));

//Mergear propriedades de objetos
// console.log(Object.assign(newUser, {fullName: 'Rodrigo Almeida'})); // add a propriedade fullName no objeto newUser

// Retorna um novo objeto mergeando dois ou mais objetos:
// console.log(Object.assign({}, newUser, {age: 41})); // {} Cria novo objeto // mergeando newUser + {age: 41}
// console.log(newUser)

// Previne todas as alterações em um objeto:
// const newObj = {foo: 'bar'};
// Object.freeze(newObj);

// newObj.foo = 'changes';
// delete newObj.foo;
// newObj.bar = 'foo';
// console.log(newObj)
// console com freeze = {foo: 'bar'}
// console sem freeze = {bar: 'foo'}

//Permite apenas a alteração de propriedades existentes em um objeto:

// const person = {name: 'Rodrigo'};
// Object.seal(person);

// person.name = 'Rodrigo Almeida';
// delete person.name;
// person.age = 41;
// console.log(person)
//console com seal, alterou a propriedade name, mas nao deletou a propriedade, nem incluiu nova propriedade

// // Laço For

// const array = ['one','two','three'];

// for (let index = 0; index <= array.length; index++) {
//     const element = array[index];
//     console.log(`Element #${index}: ${element}.`)
// }

// // FOR IN e FOR OFF

// let arr = [3, 5, 7];
// arr.foo = 'Hello';

// for( let i in arr) {
//     console.log(i); // Logs "0", "1", "2", "foo"
// }

// for( let i of arr) {
//     console.log(i); // Logs "3" ,"5" ,"7"
// }

// // Break

// console.log('Exemplo da utilização do Break');

// var index = 0;

// while(true) {
//     index++;

//     if(index > 5) {
//         break;
//     }

//     console.log(index);
// }

//Continue

console.log('Exemplo da utilização do Continue');

const array = [1, 2, 3, 4, 5, 6];

for(let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element % 2 === 0) {
        continue; // se o index for positivo, ele será pulado na iteração e não aparecerá no resultado
    }

    console.log(element);
}