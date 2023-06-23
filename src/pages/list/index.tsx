import { useEffect, useState } from "react";

import { Title } from "~@Components/Title";
import { Section } from "~@Template/section";
import { Breadcrumb } from "~@Components/Breadcrumb";
import * as Http from '~@Services/http';
import { RequestPokemonList } from "~@Services/http/requests";

export function List() {
    const [] = useState();
    useEffect(function () {
        Http.execute(new RequestPokemonList('/pokemon/?limit=20&offset=0'))
            .then(response => console.log(response));
        return () => Http.cancel();
    }, []);
    return(
        <Section>
            <Title text='Pokemon | List' />
            <Breadcrumb items={[ 'List' ]}/>
            <h1 className='sr-only'>List Pokemon Page</h1>
        </Section>
    )
}
