import { useAuth } from "~@Contexts/auth";
import { Title } from "~@Components/Title";

export function Home() {
    const { setToken } = useAuth();
    return(
        <div>
            <Title text='Pokemon | Home' />
            Home
            <button type="button" onClick={() => setToken(null)}>Log out</button>
        </div>
    )
}
