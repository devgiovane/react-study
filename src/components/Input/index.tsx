import { forwardRef, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

import { clsx, separate } from "~@Services/classname";

type RootProps = HTMLAttributes<HTMLElement> & {
    children: ReactNode
}

export function Root({ children }: RootProps) {
    return(
        <div className='mb-6'>
            {children}
        </div>
    )
}

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    text: string
}

export function Label({ text, ...rest }: LabelProps) {
    return(
        <label
            {...rest}
            className='block text-gray-400 pb-2'
        >
            {text}
        </label>
    );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    invalid?: boolean
}

export const Field = forwardRef<HTMLInputElement, InputProps>(function (props, ref) {
    const { invalid, ...rest } = props;
    return(
        <input
            ref={ref}
            {...rest}
            className={clsx(separate([
                "w-full h-12 p-4 rounded-md bg-gray-800 text-gray-100 border-2 border-gray-800",
                "focus:outline-none focus:ring-2 focus:ring-blue-900",
                "placeholder:text-gray-600"
            ]), {
                "text-pink-500 border-pink-500 focus:ring-pink-500": invalid
            })}
        />
    );
});

type ErrorProps = HTMLAttributes<HTMLElement> & {
    text: string
}

export function Error({ text, ...rest }: ErrorProps) {
    return (
        <small
            {...rest}
            className="text-pink-500 float-right"
        >
            {text}
        </small>
    );
}
