import { useEffect } from "react";

type TitleProps = {
    text: string
}

export function Title({ text }: TitleProps) {
    useEffect(function () {
        document.title = text;
    }, [ ]);
    return <></>;
}
