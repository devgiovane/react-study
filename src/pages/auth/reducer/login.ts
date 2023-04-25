export enum LoginActionKind {
    SET_ERROR = 'SET_ERROR',
    CLEAR_ERROR = 'CLEAR_ERROR',
    SET_LOADING = 'SET_LOADING'
}

type LoginState = {
    error: boolean,
    message: string,
    loading: boolean
}

type LoginAction = {
    type: LoginActionKind,
    payload?: string
}

export const initialState: LoginState = {
    error: false,
    message: "",
    loading: false
}

export function loginReducer(state: LoginState, action: LoginAction) {
    switch (action.type) {
        case LoginActionKind.SET_ERROR:
            return { ...state, error: true, message: action.payload };
        case LoginActionKind.CLEAR_ERROR:
            return { ...state, error: false, message: '' };
        case LoginActionKind.SET_LOADING:
            return { ...state, loading: !state.loading };
        default:
            throw Error('Unknown action.');
    }
}


