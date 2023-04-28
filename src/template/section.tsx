import { ReactNode } from "react";

type SectionType = {
    children: ReactNode
}

export function Section({ children }: SectionType) {
    return(
        <section className='container w-full pt-28'>
            {children}
        </section>
    )
}
