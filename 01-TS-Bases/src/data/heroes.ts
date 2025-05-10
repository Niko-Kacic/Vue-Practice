export interface Hero {
    id: number;
    name: string;
    owner: Owner;//interface ocupa tipado de dato aceptar solo los dos valores
}

export type Owner = 'DC' | 'Marvel';//Se crea tipo de datos para usar en la interface


const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


export const owners = ['DC','Marvel'] as const;

export default heroes;