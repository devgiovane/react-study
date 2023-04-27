import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "~@Template/header";
import { Main } from "~@Template/main";
import { Footer } from "~@Template/footer";

export function Template() {
    return (
        <>
            <Header />
            <Main>
                <Suspense fallback={<>Loading...</>}>
                    <Outlet />
                </Suspense>
            </Main>
            <Footer />
        </>
    );
}
