import { Suspense, lazy } from "react";

import { useAuth } from '~@Contexts/auth';

const Auth = lazy(() =>
    import(/* webpackPreload: true */"~@Pages/auth").then(module => ({
        default: module.Auth
    }))
);
const Template = lazy(() =>
    import(/* webpackPrefetch: true */"./template").then(module => ({
        default: module.Template
    }))
);

export function Validate() {
    const { token } = useAuth();
    return (
        <Suspense fallback={<>Loading...</>}>
            {!token ? <Auth/> : <Template />}
        </Suspense>
    );
}
