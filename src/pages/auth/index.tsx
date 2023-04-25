import Logo from '~@Assets/logo.svg';
import {SyntheticEvent, useState} from "react";

import { useAuth } from "~@Contexts/auth";

import { Button } from "~@Components/Button";
import * as Input from "~@Components/Input";

import { setObject } from "~@Services/storage";
import { loginWith } from "~@Services/firebase/authenticate";

type FormInputsType = {
    email: { value: string },
    password: { value: string }
}

export function Auth() {
    const { setToken } = useAuth();
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    async function login(email: string, password: string) {
        try {
            setLoading(true);
            const user = await loginWith(email, password);
            setObject('user', user);
            setToken(user.uid);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    async function submit(event: SyntheticEvent) {
        event.preventDefault();
        const {
            email,
            password
        } = event.target as typeof event.target & FormInputsType;
        if (!email.value || !password.value) {
            setError(true);
            return;
        }
        await login(email.value, password.value);
    }

    return(
        <section className='flex justify-center pt-32'>
            <form
                onSubmit={submit}
                className='w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12'
            >
                <fieldset>
                    <legend className='sr-only'>Login</legend>
                    <img src={Logo} alt='Pekemon Logo' className='mb-6 w-full' />
                    <Input.Root>
                        <Input.Label htmlFor='email' text='E-mail' />
                        <Input.Field
                            id='email'
                            type='email'
                            name='email'
                            invalid={error}
                            placeholder='Enter you e-mail'
                        />
                    </Input.Root>
                    <Input.Root>
                        <Input.Label htmlFor='password' text='Password' />
                        <Input.Field
                            id='password'
                            type='password'
                            name='password'
                            invalid={error}
                            placeholder='Enter you password'
                        />
                        {error && <Input.Error text='Password and email is not empty' />}
                    </Input.Root>
                    <Button isLoading={loading} type='submit' text='LOGIN' />
                </fieldset>
            </form>
        </section>
    )
}
