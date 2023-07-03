import { ReactNode } from "react";

import { separate } from "~@Services/classname";

type RootProps = {
    top: number
    show: boolean,
    children: ReactNode
}

export function Root({ top, show, children }: RootProps) {
    return(
        <menu
            className={separate([
                'absolute z-10 p-2 w-40 bg-white rounded-lg',
                show ? 'block' : 'hidden'
            ])}
            style={{ top }}
        >
            {children}
        </menu>
    )
}

type ItemProps = {
    children: ReactNode
    onClick?(): void
}

export function Item({ onClick, children }: ItemProps) {
    return(
        <li className='p-2 flex w-full rounded-lg hover:bg-gray-200'>
            <button className='w-full' onClick={onClick}>
                <div className='flex justify-center'>
                    {children}
                </div>
            </button>
        </li>
    )
}


type IconProps = {
    icon: string,
    classname: string
}

export function Icon({ icon, classname }: IconProps) {
    return(
        <span className={separate([ 'material-icons', classname ])}>
            {icon}
        </span>
    )
}
