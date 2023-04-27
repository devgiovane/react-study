import { MenuItem } from "~@Template/menu/item";
import { separate } from "~@Services/classname";

export function Menu() {
    return(
        <nav
            aria-label="Global"
            className={separate([
                'flex justify-between',
                'text-xl text-gray-400'
            ])}
        >
            <MenuItem path='/' text='Home' />
            <MenuItem path='list' text='List' />
            <MenuItem path='about' text='About' />
        </nav>
    );
}
