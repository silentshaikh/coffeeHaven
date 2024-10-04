import { ReactNode } from "react";

export interface List{
    name:string;
    link:string;
};
export interface ServicCard{
    img:string;
    name:string;
    id:number;
};
export interface SerName{
    name:string;
};
export interface SerImg{
    img:string;
    name:string
};
export interface ContextChild{
    children:ReactNode;
};
export interface ContextType{
    showNav:boolean;
    coffeeToggle:() => void;
    letter:boolean;
    newsLetter:() => void;
    leavebtn:() => void;
    listToggle:() => void;
};
export interface ProductList{
    img:string;
    name:string;
    price:string;
    button:string;
    size?:string;
}