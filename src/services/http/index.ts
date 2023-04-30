import { Request } from "~@Services/http/requests";

let abortController = new AbortController();

export async function execute(request: Request) {
    try {
        const response = await fetch(request.getUrl(), {
            method: request.getMethod(),
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request.getBody()),
            signal: abortController.signal
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

export function cancel() {
    abortController.abort();
    abortController = new AbortController();
}
