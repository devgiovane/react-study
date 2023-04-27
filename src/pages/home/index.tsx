import { Title } from "~@Components/Title";
import { Section } from "~@Template/section";

export function Home() {
    return(
        <Section>
            <Title text='Pokemon | Home' />
            <h1 className='text-gray-400'>Home Page</h1>
        </Section>
    )
}
