import { Title } from "~@Components/Title";
import { Section } from "~@Template/section";

export function Favorite() {
    return(
        <Section>
            <Title text='Pokemon | favorite' />
            <h1 className='sr-only'>Favorite Pokemon</h1>
        </Section>
    )
}
