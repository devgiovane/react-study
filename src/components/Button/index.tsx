import { ButtonHTMLAttributes } from "react";

import { Spin } from "~@Components/Loader";
import { separate } from "~@Services/classname";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string,
    isLoading?: boolean
}

export function Button({ text, isLoading, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={separate([
                "flex justify-center items-center",
                "w-full h-12 py-2 rounded-md bg-blue-900 text-gray-200",
                "hover:bg-blue-950 hover:text-gray-300"
            ])}
        >
            {isLoading ? <Spin /> : text}
        </button>
    )
}
