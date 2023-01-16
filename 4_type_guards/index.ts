//type guard de forma simples para tipos primitivos
function prinType(value: number | string) {
    if (typeof value === 'number') {
    } else if (typeof value === 'string') {
    }
};


//
interface Developer {
    name: string;
    language: string
}

interface Designer {
    name: string;
    software: string
}

const developer: Developer = {name: 'Emmanuel', lang: 'js'};
const designer: Designer = {name: 'Joao', software: 'Photoshop'};

function printSkill(person: Developer | Designer) : void {
    if(person.language) { //o ts vai continuar reconhecendo como possivelmente um dos dois
        console.log('dev')
    }
    else {
        console.log('designer')
    }
}; 

//refatorando corretamente //essa forma é funcionar porém não ideal
function printSkillRefactor(person: Developer | Designer) : void {
    if('language' in person) { //
        console.log(person.language)
    }
    else {
        console.log(person.software)
    }
}; 

//ideal
function isDeveloper(person:  Developer | Designer): person is Developer {
    return 'language' in person;
}

function printSkillRefactor_2(person: Developer | Designer) : void {
    if(isDeveloper(person)) { //
        console.log(person.language)
    }
    else {
        console.log(person.software)
    }
};