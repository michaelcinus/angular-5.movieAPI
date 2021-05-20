import { categories } from "./categopries";

export interface Movie {
    id? : number,
    nome? : string,
    descrizione? : string,
    anno? : number,
    categories? : categories[]
}