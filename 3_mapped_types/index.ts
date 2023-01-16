interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: 'Emmanuel'
}

//supondo que queremos tornar age não obrigatorio
//com ''?'' você abre brechas no código

//isso transforma as propriedas como não obrigatorias dentro desse objeto
//o Parseal é um tipo mapeado
const personPartial: Partial<Person> = {
    name: 'Emmanuel'
}

const personReadonly: Readonly<Person> = {
    name: 'Emmanuel',
    age: 22
}

personReadonly.age = 27
//o readonly transforma o objeto como inalteravel //outro mapped type

