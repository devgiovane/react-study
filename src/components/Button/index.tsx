type ButtonProps = {
    text: string,
    handleClick(): void
}

export function Button({ text, handleClick }: ButtonProps) {
    return (
        <button type='button' onClick={handleClick}>
            {text}
        </button>
    )
}
