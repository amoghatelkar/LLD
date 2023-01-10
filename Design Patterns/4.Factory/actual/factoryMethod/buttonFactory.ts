import { Button } from "../models/button";

export interface IGenericButtonFactory{
    createButton() :Button; 
}