import { useEffect } from "react";

import { Title } from "~@Components/Title";
import { Section } from "~@Template/section";
import { Breadcrumb } from "~@Components/Breadcrumb";

export function List() {
    useEffect(function () {
        fetch(`${process.env.API_URL}/pokemon/?limit=20&offset=0`)
            .then(r => r.json())
            .then(r => console.log(r));
    }, []);
    return(
        <Section>
            <Title text='Pokemon | List' />
            <Breadcrumb items={[ 'List' ]}/>
            <h1 className='sr-only'>List Pokemon Page</h1>
        </Section>
    )
}
