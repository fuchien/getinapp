export interface IResponse {
    code: number;
    reason: string,
    data: IData & boolean;
}

export interface IData {
    id: string;
    resposta: boolean;
}