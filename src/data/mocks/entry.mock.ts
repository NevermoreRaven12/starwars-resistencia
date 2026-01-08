import { Entry } from "../models/journal/entry";

export const EntryMock1: Entry = {
    id: 1,
    titulo: "Uma figura misteriosa nos enviou à Caverna dos Ossos",
    isCompleta: false,
    subEntry: ["Ao chegar na caverna um cheiro de enxofre empestea o lugar"],
    descricao: "Ele disse que alguns animais que entram na caverna ecoam gritos de dor e agonia e jamais retornam."
}

export const EntryMock2: Entry = {
    id: 2,
    titulo: "Uma figura misteriosa nos enviou à Caverna dos Olhares",
    isCompleta: true,
    subEntry: ["Ao chegar na caverna sentimos que estamos sendo observados"],
    descricao: "Ele disse que precisa recuperar uma bolsa repleta de diamantes que ficou na caverna."
}