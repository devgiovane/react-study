import PikachuLogo from '~@Assets/pikachu.png';

import { Link } from "react-router-dom";
import { memo, SyntheticEvent, useCallback, useMemo } from "react";

import { Menu } from "~@Template/menu";
import * as Storage from "~@Services/storage";
import { separate } from "~@Services/classname";
import { UserType } from "~@Services/firebase/authenticate";

const user = Storage.getObject<UserType>('user');

export const Header = memo(function () {

    const getSourceImage = useMemo(function () {
        if (!user.photoURL) {
            return PikachuLogo;
        }
        return user.photoURL;
    }, [ ]);

    const validateSourceImage = useCallback(function (event: SyntheticEvent) {
        const target = event.target as HTMLImageElement;
        target.src = PikachuLogo;
    }, [ ]);

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
                <img
                    width={56}
                    height={56}
                    src={getSourceImage}
                    onError={validateSourceImage}
                    alt='User Photo'
                    className='p-1 block rounded-full cursor-pointer border-2 border-white'
                />
            </div>
        </header>
    );
});
