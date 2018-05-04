export interface IWord {
    id: number;
    name: string;
    definitions: IDefinition[];
}

export interface IDefinition {
    word: number;
    definition: string;
    partOfSpeech: string;
}
