import { ReactNode } from "react";

type SectionType = {
    children: ReactNode
}

export function Section({ children }: SectionType) {
    return(
        <section className='w-full pt-24'>
            {children}
        </section>
    )
}
