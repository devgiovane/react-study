import { Title } from "~@Components/Title";
import { Section } from "~@Template/section";
import * as Storage from "~@Services/storage";
import * as DateService from "~@Services/date";
import { UserType } from "~@Services/firebase/authenticate";

const user = Storage.getObject<UserType>('user');

export function Home() {
    return(
        <Section>
            <Title text='Pokemon | Home' />
            <h1 className='sr-only'>Home Page</h1>
            <section className='flex justify-between'>
                <hgroup>
                    <h2 className='text-white text-4xl'>
                        Hello, {user?.displayName.split(' ').at(0)}
                    </h2>
                    <p className='text-gray-300 text-xl'>
                        It's good to have you back.
                    </p>
                </hgroup>
                <hgroup className='flex flex-col items-end'>
                    <h2 className='text-white text-2xl'>
                        {DateService.format(new Date(), { day: '2-digit', month: 'long' })}
                    </h2>
                    <p className='text-gray-300 text-xl'>
                        Have a good day.
                    </p>
                </hgroup>
            </section>
        </Section>
    )
}
