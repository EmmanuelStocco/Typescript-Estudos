//é possivel concatenar interfaces, com types é apontado como declarador duplicado
//ideal para utilizar na criação de libs
interface Profession {
    name: string;
}

interface Profession {
    salary: number;
}

const dev: Profession = {
    name: 'John',
    salary: 2500
}

//tipagens com types te permitem fazer mapeamentos opr keyof
type Stringify<T> = {
    [P in keyof T]: string
}

//as tipagens podem servir como "as". Simplesmente para apelidar vars
type MyName = string
let Emmanuel: MyName;