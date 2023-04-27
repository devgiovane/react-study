import { useEffect } from "react";

import { Title } from "~@Components/Title";
import { Section } from "~@Template/section";

export function List() {
    useEffect(function () {
        fetch(`${process.env.API_URL}pokemon/?limit=20&offset=0`)
            .then(r => r.json())
            .then(r => console.log(r));
    }, []);
    return(
        <Section>
            <Title text='Pokemon | List' />
            <h1 className='text-gray-400'>List Page</h1>
        </Section>
    )
}
