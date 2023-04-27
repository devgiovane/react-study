
import { memo } from "react";

import { Menu } from "~@Template/menu";
import * as Storage from "~@Services/storage";
import { separate } from "~@Services/classname";
import { UserType } from "~@Services/firebase/authenticate";

const user = Storage.getObject<UserType>('user');
export const Header = memo(function () {
    return(
        <header
            className={separate([
                "flex justify-between items-center",
                "w-full h-20 py-2 px-36 bg-gray-800 shadow-lg shadow-gray-900 fixed top-0"
            ])}
        >
            <h1 className='text-white text-3xl'>Pokemon</h1>
            <Menu />
            <div>
                <img
                    width={56}
                    height={56}
                    src={user.photoURL}
                    alt='User photo'
                    className='p-1 block rounded-full cursor-pointer border-2 border-white'
                />
            </div>
        </header>
    );
});
