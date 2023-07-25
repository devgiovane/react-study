import { IDateManager } from "~@Services/date/IDateManager";

export class DateManager implements IDateManager {
    public format(date: Date, options: object): string {
        return new Intl.DateTimeFormat('en', options).format(date);
    }

}
