import Logo from '~@Assets/logo.svg';
import GoogleLogo from '~@Assets/google.svg';
import { useRef, useReducer, FormEvent } from "react";

import { useAuth } from "~@Contexts/auth";
import { Title } from "~@Components/Title";
import { Button } from "~@Components/Button";
import * as Input from "~@Components/Input";
import { setObject } from "~@Services/storage";
import { loginWith, loginWithGoogle } from "~@Services/firebase/authenticate";

import { loginReducer, initialState, LoginActionKind } from './reducer/login';

export function Auth() {
    const { setToken } = useAuth();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [ state, dispatch ] = useReducer(loginReducer, initialState);

    async function loginWithPassword(email: string, password: string) {
        try {
            dispatch({ type: LoginActionKind.SET_LOADING });
            const user = await loginWith(email, password);
            setObject('user', user);
            setToken(user.uid);
        } catch (error) {
            dispatch({ type: LoginActionKind.SET_ERROR, payload: 'Password or e-mail invalid!' });
        } finally {
            dispatch({ type: LoginActionKind.SET_LOADING });
        }
    }

    async function loginWithGoogleProvider() {
        try {
            const user = await loginWithGoogle();
            setObject('user', user);
            setToken(user.uid);
        } catch (error) {
            dispatch({ type: LoginActionKind.SET_ERROR, payload: 'Error in login with google!' });
        }
    }

    async function submitDefault(event: FormEvent) {
        event.preventDefault();
        await loginWithPassword(emailRef.current.value, passwordRef.current.value);
    }

    async function submitGoogle() {
        await loginWithGoogleProvider();
    }

    function clearErrors() {
        if (!state.error) return;
        dispatch({ type: LoginActionKind.CLEAR_ERROR });
    }

    return(
        <section className='flex justify-center pt-28'>
            <Title text='Pokemon | Login' />
            <form
                onBlur={clearErrors}
                onSubmit={submitDefault}
                className='w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12'
            >
                <fieldset>
                    <legend className='sr-only'>Login</legend>
                    <img src={Logo} alt='Pekemon Logo' className='mb-6 w-full' />
                    <Input.Root>
                        <Input.Label htmlFor='email' text='E-mail' />
                        <Input.Field
                            required
                            ref={emailRef}
                            id='email'
                            type='email'
                            name='email'
                            invalid={state.error}
                            placeholder='Enter you e-mail'
                        />
                    </Input.Root>
                    <Input.Root>
                        <Input.Label htmlFor='password' text='Password' />
                        <Input.Field
                            required
                            ref={passwordRef}
                            id='password'
                            type='password'
                            name='password'
                            invalid={state.error}
                            placeholder='Enter you password'
                        />
                        {state.error && <Input.Error text={state.message} />}
                    </Input.Root>
                    <Button
                        type='submit'
                        className="bg-blue-800 text-gray-200 hover:bg-blue-900 hover:text-gray-300"
                        isLoading={state.loading}
                    >
                        LOGIN
                    </Button>
                    <hr className='border-gray-700 my-4' />
                    <Button
                        type='button'
                        className="bg-gray-50 text-gray-800 hover:bg-gray-300 hover:text-gray-900"
                        onClick={submitGoogle}
                    >
                        <>
                            <img src={GoogleLogo} alt='Google Logo' className='w-7 mr-2' />
                            GOOGLE
                        </>
                    </Button>
                </fieldset>
            </form>
        </section>
    )
}
