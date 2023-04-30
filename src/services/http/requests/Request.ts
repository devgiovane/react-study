export class Request {

    constructor(
        private readonly url: string,
        private readonly method: string,
        private readonly body?: object
    ) {
    }

    public getUrl(): string {
        return this.url;
    }

    public getMethod(): string {
        return this.method;
    }

    public getBody() {
        return this.body;
    }
}
