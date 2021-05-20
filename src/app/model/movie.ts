import { category } from "./category";

export interface Movie {
    id? : number,
    nome? : string,
    descrizione? : string,
    anno? : number,
    categories? : category[]
}