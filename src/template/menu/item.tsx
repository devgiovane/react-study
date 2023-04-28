import { NavLink } from "react-router-dom";
import { clsx, separate } from "~@Services/classname";

type MenuItemProps = {
    path: string,
    text: string
}

export function MenuItem({ text, path }: MenuItemProps) {
    return(
        <NavLink
            to={path}
            className={({ isActive }) => clsx(separate([
                'px-4 h-full flex items-center',
                'hover:text-white',
                'transition-colors duration-150 ease-in-out'
            ]), {
               'text-white border-b-2 border-b-blue-500' : isActive
            })}
        >
            {text}
        </NavLink>
    );
}
