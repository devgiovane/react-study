import { ButtonHTMLAttributes, ReactNode } from "react";

import { Spin } from "~@Components/Loader";
import { separate } from "~@Services/classname";

type ButtonProps = {
    isLoading?: boolean,
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, isLoading, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={separate([
                "flex justify-center items-center",
                'w-full h-12 py-2 rounded-md text-sm',
                className
            ])}
        >
            {isLoading ? <Spin /> : children}
        </button>
    )
}
