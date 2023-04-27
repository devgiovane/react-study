import { ReactNode } from "react";

type MainProps = {
    children: ReactNode
}

export function Main({ children }: MainProps) {
    return(
        <main className='container pt-24'>
            {children}
        </main>
    );
}
