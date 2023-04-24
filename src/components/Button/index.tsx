type ButtonProps = {
    text: string,
    handleClick(): void
}

export function Button({ text, handleClick }: ButtonProps) {
    return (
        <button
            type='button'
            className='bg-blue-900 text-gray-100 w-full h-14 py-2 rounded-md hover:bg-blue-950 hover:text-gray-300'
            onClick={handleClick}
        >
            {text}
        </button>
    )
}
