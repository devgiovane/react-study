export function format(date: Date, options: object) {
    return new Intl.DateTimeFormat('en', options).format(date);
}
