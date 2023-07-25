import PikachuLogo from "~@Assets/images/pikachu.png";

import { SyntheticEvent, useCallback, useMemo, useState } from "react";

import { useAuth } from "~@Contexts/auth";
import * as Dropdown from "~@Components/Dropdown";
import { LocalStorage } from "~@Services/storage/LocalStorage";
import { ILocalStorage } from "~@Services/storage/ILocalStorage";
import { UserType } from "~@Services/firebase/authenticate";

const localStorage: ILocalStorage = new LocalStorage();
const user = localStorage.getObject<UserType>('user');

export function User() {
    const { setToken } = useAuth();
    const [ showMenu, setShowMenu ] = useState(false);

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

    const onChangeShowMenu = useCallback(function () {
        setShowMenu(prevState => !prevState);
    }, [ ]);

    const logout = useCallback(function () {
        setToken('');
    }, [ ]);

    return(
        <div className='relative flex justify-center'>
            <img
                width={56}
                height={56}
                src={getSourceImage}
                onError={validateSourceImage}
                onClick={onChangeShowMenu}
                alt='User Photo'
                className='p-1 block rounded-full cursor-pointer border-2 border-white'
            />
            <Dropdown.Root top={70} show={showMenu}>
                <Dropdown.Item>
                    <Dropdown.Icon icon='person' classname='mr-2' />
                    Profile
                </Dropdown.Item>
                <Dropdown.Item>
                    <Dropdown.Icon icon='settings' classname='mr-2' />
                    Settings
                </Dropdown.Item>
                <Dropdown.Item onClick={logout}>
                    <Dropdown.Icon icon='logout' classname='mr-2' />
                    Logout
                </Dropdown.Item>
            </Dropdown.Root>
        </div>
    )
}
