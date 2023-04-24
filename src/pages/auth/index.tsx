import { useAuth } from "~@Contexts/auth";

import { Button } from "~@Components/Button";
import { Input } from "~@Components/Input";

import { setObject } from "~@Services/storage";
import { loginWith } from "~@Services/firebase/authenticate";

export function Auth() {
    const { setToken } = useAuth();
    async function login() {
        try {
            const user = await loginWith('', '');
            setObject('user', user);
            setToken(user.uid);
        } catch (error) {
            console.log(error);
            //validate error
        }
    }
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
                    <Button text='Login' handleClick={login}/>
                </fieldset>
            </form>
        </section>
    )
}
