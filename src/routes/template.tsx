import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "~@Template/header";
import { Main } from "~@Template/main";

export function Template() {
    return (
        <>
            <Header />
            <Main>
                <Suspense fallback={<>Loading...</>}>
                    <Outlet />
                </Suspense>
            </Main>
            <footer className='text-gray-400'>
                Footer
            </footer>
        </>
    );
}
