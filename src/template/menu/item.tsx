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
                'px-2', 'hover:text-white',
                'transition-colors duration-150 ease-in-out'
            ]), {
               'text-white' : isActive
            })}
        >
            {text}
        </NavLink>
    );
}
