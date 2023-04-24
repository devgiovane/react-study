// @ts-ignore
import Logo from '../../assets/logo.svg';

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
        <section className='flex justify-center pt-32'>
            <form className='w-8/12 sm:w-6/12 md:w-4/12 xl:w-3/12'>
                <fieldset>
                    <img src={Logo} alt='Pekemon Logo' className='mb-6' />
                    <p className='mb-4'>
                        <Input type='text' placeholder='Enter you e-mail' />
                    </p>
                    <p className='mb-4'>
                        <Input type='password' placeholder='Enter you password' />
                    </p>
                    <Button text='LOGIN' handleClick={login}/>
                </fieldset>
            </form>
        </section>
    )
}
