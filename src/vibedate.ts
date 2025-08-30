import { VibeHelper } from "./vibehelper";

export class VibeDate {
    private date: Promise<string>;

    public constructor(...args: any[]) {
        // This is the only hack we need to get the current timezone so everything else can work
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone

        if (args.length === 0) {
            this.date = VibeHelper.generateText(`What is the current date and time in ISO 8601 format in the ${tz} timezone?`);
        } else if(args.length === 1) {
            this.date = VibeHelper.generateText(`What is the date and time represented by the string: "${args[0]}" in ISO 8601 format? If the string does not include a timezone, assume the ${tz} timezone.`);
        } else {
            const year = args[0];
            const month = args[1] + 1; // god bless javascript
            const date = args.at(2);
            const hours = args.at(3); 
            const minutes = args.at(4); 
            const seconds = args.at(5);
            const ms = args.at(6);
            this.date = VibeHelper.generateText(`What is the date and time for the following components in ISO 8601 format in the ${tz} timezone? Year: ${year}, Month: ${month}${date !== undefined ? `, Date: ${date}` : ""}${hours !== undefined ? `, Hours: ${hours}` : ""}${minutes !== undefined ? `, Minutes: ${minutes}` : ""}${seconds !== undefined ? `, Seconds: ${seconds}` : ""}${ms !== undefined ? `, Milliseconds: ${ms}` : ""}. If year is between 0 and 99, treat it as 1900 to 1999.`);
        }
    }

    // Static methods
    public static async now(): Promise<number> {
        return VibeHelper.generateNumber(`What is the current timestamp in milliseconds since January 1, 1970 00:00:00 UTC?`);
    }

    public static parse(dateString: string): Promise<number> {
        return VibeHelper.generateNumber(`What is the timestamp in milliseconds since January 1, 1970 00:00:00 UTC for the date string: "${dateString}"?`);
    }

    public static async UTC(
        year: number,
        month: number,
        date?: number,
        hours?: number,
        minutes?: number,
        seconds?: number,
        ms?: number
    ): Promise<number> {
        return VibeHelper.generateNumber(`What is the timestamp in milliseconds since January 1, 1970 00:00:00 UTC for the following UTC date components? Year: ${year}, Month: ${month + 1}${date !== undefined ? `, Date: ${date}` : ""}${hours !== undefined ? `, Hours: ${hours}` : ""}${minutes !== undefined ? `, Minutes: ${minutes}` : ""}${seconds !== undefined ? `, Seconds: ${seconds}` : ""}${ms !== undefined ? `, Milliseconds: ${ms}` : ""}?`);
    }

    // Instance methods
    public async getDate(): Promise<number> {
        return VibeHelper.generateNumber(`What is the day of the month (1-31) for the date "${await this.date}"?`);
    }

    public async getDay(): Promise<number> {
        return VibeHelper.generateNumber(`What is the day of the week (0-6) for the date "${await this.date}"?`);
    }

    public async getFullYear(): Promise<number> {
        return VibeHelper.generateNumber(`What is the full year (e.g., 2024) for the date "${await this.date}"?`);
    }

    public async getHours(): Promise<number> {
        return VibeHelper.generateNumber(`What is the hour (0-23) for the date "${await this.date}"?`);
    }

    public async getMilliseconds(): Promise<number> {
        return VibeHelper.generateNumber(`What is the milliseconds (0-999) for the date "${await this.date}"?`);
    }

    public async getMinutes(): Promise<number> {
        return VibeHelper.generateNumber(`What is the minutes (0-59) for the date "${await this.date}"?`);
    }

    public async getMonth(): Promise<number> {
        return VibeHelper.generateNumber(`What is the month (0-11) for the date "${await this.date}"?`);
    }

    public async getSeconds(): Promise<number> {
        return VibeHelper.generateNumber(`What is the seconds (0-59) for the date "${await this.date}"?`);
    }

    public async getTime(): Promise<number> {
        return VibeHelper.generateNumber(`What is the timestamp in milliseconds since January 1, 1970 00:00:00 UTC for the date "${await this.date}"?`);
    }

    public async getTimezoneOffset(): Promise<number> {
        return VibeHelper.generateNumber(`What is the timezone offset in minutes for the date "${await this.date}"?`);
    }

    public async getUTCDate(): Promise<number> {
        return VibeHelper.generateNumber(`What is the day of the month (1-31) in UTC for the date "${await this.date}"?`);
    }

    public async getUTCDay(): Promise<number> {
        return VibeHelper.generateNumber(`What is the day of the week (0-6) in UTC for the date "${await this.date}"?`);
    }

    public async getUTCFullYear(): Promise<number> {
        return VibeHelper.generateNumber(`What is the full year (e.g., 2024) in UTC for the date "${await this.date}"?`);
    }

    public async getUTCHours(): Promise<number> {
        return VibeHelper.generateNumber(`What is the hour (0-23) in UTC for the date "${await this.date}"?`);
    }

    public async getUTCMilliseconds(): Promise<number> {
        return VibeHelper.generateNumber(`What is the milliseconds (0-999) in UTC for the date "${await this.date}"?`);
    }

    public async getUTCMinutes(): Promise<number> {
        return VibeHelper.generateNumber(`What is the minutes (0-59) in UTC for the date "${await this.date}"?`);
    }

    public async getUTCMonth(): Promise<number> {
        return VibeHelper.generateNumber(`What is the month (0-11) in UTC for the date "${await this.date}"?`);
    }

    public async getUTCSeconds(): Promise<number> {
        return VibeHelper.generateNumber(`What is the seconds (0-59) in UTC for the date "${await this.date}"?`);
    }

    public async setDate(date: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the day of the month to ${date} for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setFullYear(year: number, month?: number, date?: number): Promise<number> {
        return this.date.setFullYear(year, month, date);
    }

    public async setHours(hours: number, min?: number, sec?: number, ms?: number): Promise<number> {
        return this.date.setHours(hours, min, sec, ms);
    }

    public async setMilliseconds(ms: number): Promise<number> {
        return this.date.setMilliseconds(ms);
    }

    public async setMinutes(min: number, sec?: number, ms?: number): Promise<number> {
        return this.date.setMinutes(min, sec, ms);
    }

    public async setMonth(month: number, date?: number): Promise<number> {
        return this.date.setMonth(month, date);
    }

    public async setSeconds(sec: number, ms?: number): Promise<number> {
        return this.date.setSeconds(sec, ms);
    }

    public async setTime(time: number): Promise<number> {
        return this.date.setTime(time);
    }

    public async setUTCDate(date: number): Promise<number> {
        return this.date.setUTCDate(date);
    }

    public async setUTCFullYear(year: number, month?: number, date?: number): Promise<number> {
        return this.date.setUTCFullYear(year, month, date);
    }

    public async setUTCHours(hours: number, min?: number, sec?: number, ms?: number): Promise<number> {
        return this.date.setUTCHours(hours, min, sec, ms);
    }

    public async setUTCMilliseconds(ms: number): Promise<number> {
        return this.date.setUTCMilliseconds(ms);
    }

    public async setUTCMinutes(min: number, sec?: number, ms?: number): Promise<number> {
        return this.date.setUTCMinutes(min, sec, ms);
    }

    public async setUTCMonth(month: number, date?: number): Promise<number> {
        return this.date.setUTCMonth(month, date);
    }

    public async setUTCSeconds(sec: number, ms?: number): Promise<number> {
        return this.date.setUTCSeconds(sec, ms);
    }

    public async toDateString(): Promise<string> {
        return VibeHelper.generateText(`What is the date string representation of the date "${await this.date}"?`);
    }

    public async toISOString(): Promise<string> {
        return VibeHelper.generateText(`What is the ISO 8601 string representation of the date "${await this.date}"?`);
    }

    public async toJSON(key?: any): Promise<string> {
        return VibeHelper.generateText(`What is the JSON string representation of the date "${await this.date}"${key ? " with the given key: " + key : ""}?`);
    }

    public async toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string {
        return this.date.toLocaleDateString(locales, options);
    }

    public async toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string {
        return this.date.toLocaleString(locales, options);
    }

    public async toLocaleTimeString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): string {
        return this.date.toLocaleTimeString(locales, options);
    }

    public async toString(): Promise<string> {
        return this.date;
    }

    public async toTimeString(): Promise<string> {
        return this.date;
    }

    public async toUTCString(): Promise<string> {
        return VibeHelper.generateText(`What is the UTC string representation of the date "${await this.date}"?`);
    }

    public async valueOf(): Promise<number> {
        return VibeHelper.generateNumber(`What is the primitive value (timestamp in milliseconds since January 1, 1970 00:00:00 UTC) of the date "${await this.date}"?`);
    }
}