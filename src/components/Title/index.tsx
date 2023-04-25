import { useEffect } from "react";

interface TitleProps {
    text: string
}

export function Title({ text }: TitleProps) {
    useEffect(function () {
        document.title = text;
    }, [ ]);
    return <></>;
}
