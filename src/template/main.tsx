import { ReactNode } from "react";

type MainProps = {
    children: ReactNode
}

export function Main({ children }: MainProps) {
    return(
        <main>
            {children}
        </main>
    );
}
