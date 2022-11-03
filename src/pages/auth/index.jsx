import { useAuth } from "~@Contexts/auth";

export function Auth() {
    const { setToken } = useAuth();
    return(
        <div>
            Auth
            <button onClick={() => setToken('cc50bb4f-7a05-4715-977b-2e22be1a3db0')}>Login</button>
        </div>
    )
}
