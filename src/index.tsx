import './styles/global.css';

import { createRoot } from 'react-dom/client';

import { ProjectRoutes } from './routes';
import { AuthProvider } from "~@Contexts/auth";

const root = createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <ProjectRoutes/>
    </AuthProvider>
);
