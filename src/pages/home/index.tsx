import { useAuth } from "~@Contexts/auth";

export function Home() {
    const { setToken } = useAuth();
    return(
        <div>
            Home
            <button type="button" onClick={() => setToken(null)}>Log out</button>
        </div>
    )
}
