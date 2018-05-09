export interface IWord {
    id: number;
    name: string;
    definition_set: IDefinition[];
}

export interface IDefinition {
    word: number;
    definition: string;
    part_of_speech: string;
}
