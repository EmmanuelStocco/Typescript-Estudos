//Craido mapped types pessoais:

interface Person {
    name: string;
    age: number;
}


//supondo por exemplo que queremnos transformar todos os dados no envio
//de uma função para string


type Stringify<T> = {
    [P in keyof T]: string //para cada propriedade dentro do type passado como parametro, transforme em string
}

const stringPerson: Stringify<Person> = {
    name: 'Emm',
    age: '22'
}