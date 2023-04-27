import { useAuth } from "~@Contexts/auth";
import { Title } from "~@Components/Title";

export function Home() {
    const { setToken } = useAuth();
    return(
        <section>
            <Title text='Pokemon | Home' />
            <h1 className='text-gray-400'>Home Page</h1>
        </section>
    )
}
