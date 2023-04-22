import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export function Template() {
    return (
        <>
            <header>
                <h1>Welcome to the app!</h1>
            </header>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="list">List</Link>
            </nav>
            <main className="content">
                <Suspense fallback={<>Loading...</>}>
                    <Outlet />
                </Suspense>
            </main>
            <footer>
                Footer
            </footer>
        </>
    );
}
