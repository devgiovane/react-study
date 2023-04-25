type ClsxConditionsType = {
    [key: string]: boolean
}

export function clsx(first: string, conditions: ClsxConditionsType) {
    let className = first;
    for (let k in conditions) {
        if (conditions[k]) {
            className += ' ' + k;
        }
    }
    return className;
}
export function separate(classes: Array<string>) {
    let className = '';
    for (let c of classes) {
        className += ' ' + c;
    }
    return className;
}
