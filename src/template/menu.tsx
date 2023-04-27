import { Link } from "react-router-dom";
import {separate} from "~@Services/classname";

export function Menu() {
    return(
        <menu
            className={separate([
                'flex justify-between', 'text-xl text-gray-400',
            ])}
        >
            <Link
                to="/"
                className={separate([
                    'px-2', 'hover:text-white', 'transition-colors duration-150 ease-in-out'
                ])}
            >
                Home
            </Link>
            <Link
                to="list"
                className={separate([
                    'px-2', 'hover:text-white', 'transition-colors duration-150 ease-in-out'
                ])}
            >
                List
            </Link>
        </menu>
    );
}
