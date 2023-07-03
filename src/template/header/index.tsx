import { memo } from "react";
import { Link } from "react-router-dom";

import { User } from "./user";

import { Menu } from "~@Template/menu";
import { separate } from "~@Services/classname";


export const Index = memo(function () {
    return(
        <header
            className={separate([
                "flex justify-between items-center",
                "w-full h-20 px-40 bg-gray-800 shadow-lg shadow-gray-900 fixed top-0"
            ])}
        >
            <h1 className='text-white text-3xl'>Pokemon</h1>
            <Menu />
            <div className='flex'>
                <Link
                    to='favorite'
                    title='Favorites Pokemons'
                    aria-label='Favorites pokemons'
                    className={separate([
                        'flex justify-center items-center',
                        'mr-4 p-2 w-14 text-white rounded-lg cursor-pointer',
                        'hover:bg-gray-900 hover:text-pink-600'
                    ])}
                >
                    <span className='material-icons'>
                        favorite
                    </span>
                </Link>
                <User />
            </div>
        </header>
    );
});
