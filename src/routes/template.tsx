import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Index } from "~@Template/header";
import { Main } from "~@Template/main";
import { Footer } from "~@Template/footer";

export function Template() {
    return (
        <>
            <Index />
            <Main>
                <Suspense fallback={<>Loading...</>}>
                    <Outlet />
                </Suspense>
            </Main>
            <Footer />
        </>
    );
}
