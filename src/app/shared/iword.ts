import { IDefinition } from './idefinition';

export interface IWord {
    id: number;
    name: string;
    definitions: IDefinition[];
}
