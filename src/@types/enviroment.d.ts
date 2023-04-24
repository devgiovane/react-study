export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_URL: string
            FIREBASE_APP_ID: string
            FIREBASE_API_KEY: string
            FIREBASE_PROJECT_ID: string
            FIREBASE_AUTH_DOMAIN: string
        }
    }
}
