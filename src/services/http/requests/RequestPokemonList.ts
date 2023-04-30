import { Request } from "~@Services/http/requests/Request";


export class RequestPokemonList extends Request {

    constructor(path: string) {
        const url = `${process.env.API_URL}${path}`;
        super(url, 'GET');
    }

}
