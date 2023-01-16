import {Adress, Person} from './interface'

const person: Person = {
    name: 'Emm',
    age: 22
};

const address: Adress = {
    street: 'aquela rua',
    zipCode: '995659599'
};


//fazer uma tipagem unindo duas tipagens anteriores

//intersection Types //funciona tanto para types quanto para interfaces
const personWithAddress: Person & Adress= {
    // name: 'Emm',
    // age: 22,
    // street: 'aquela rua',
    // zipCode: '995659599' 
    ...person,
    ...address
};


//atribundo as os types como parametros 
export function merge<First, Second>(obj1: First, obj2: Second): First & Second {
    return {...obj1, ...obj2};
};


const n = merge(person, address)

