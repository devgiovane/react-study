import { Title } from "~@Components/Title";
import { Section } from "~@Template/section";
import { LocalStorage } from "~@Services/storage/LocalStorage";
import { ILocalStorage } from "~@Services/storage/ILocalStorage";
import { DateManager } from "~@Services/date/DateManager";
import { IDateManager } from "~@Services/date/IDateManager";
import { UserType } from "~@Services/firebase/authenticate";

const dateManager: IDateManager = new DateManager();
const localStorage: ILocalStorage = new LocalStorage();
const user = localStorage.getObject<UserType>('user');

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
                        {dateManager.format(new Date(), { day: '2-digit', month: 'long' })}
                    </h2>
                    <p className='text-gray-300 text-xl'>
                        Have a good day.
                    </p>
                </hgroup>
            </section>
        </Section>
    )
}
