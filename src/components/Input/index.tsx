type InputProps = {
    type: string
    placeholder?: string
}
export function Input({ type, placeholder }: InputProps) {
    return(
        <input
            type={type}
            className='bg-gray-800 w-full h-14 text-gray-100 p-4 rounded-md border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-900 placeholder:text-gray-600'
            placeholder={placeholder}
        />
    );
}
