import { useAuth } from "~@Contexts/auth";
import { Button } from "~@Components/Button";
import { Input } from "~@Components/Input";

export function Auth() {
    const { setToken } = useAuth();
    return(
        <section>
            <form>
                <fieldset>
                    <legend>Login</legend>
                    <p>
                        <Input />
                    </p>
                    <p>
                        <Input />
                    </p>
                    <Button text='Login' handleClick={() => setToken('token')}/>
                </fieldset>
            </form>
        </section>
    )
}
