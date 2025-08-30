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
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the year to ${year}${month !== undefined ? `, month to ${month+1}` : ""}${date !== undefined ? `, date to ${date}` : ""} for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setHours(hours: number, min?: number, sec?: number, ms?: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the hours to ${hours}${min !== undefined ? `, minutes to ${min}` : ""}${sec !== undefined ? `, seconds to ${sec}` : ""}${ms !== undefined ? `, milliseconds to ${ms}` : ""} for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setMilliseconds(ms: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the milliseconds to ${ms} for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setMinutes(min: number, sec?: number, ms?: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the minutes to ${min}${sec !== undefined ? `, seconds to ${sec}` : ""}${ms !== undefined ? `, milliseconds to ${ms}` : ""} for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setMonth(month: number, date?: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the month to ${month+1}${date !== undefined ? `, date to ${date}` : ""} for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setSeconds(sec: number, ms?: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the seconds to ${sec}${ms !== undefined ? `, milliseconds to ${ms}` : ""} for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setTime(time: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the time to the timestamp ${time} for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setUTCDate(date: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the day of the month to ${date} in UTC for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setUTCFullYear(year: number, month?: number, date?: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the year to ${year}${month !== undefined ? `, month to ${month+1}` : ""}${date !== undefined ? `, date to ${date}` : ""} in UTC for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setUTCHours(hours: number, min?: number, sec?: number, ms?: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the hours to ${hours}${min !== undefined ? `, minutes to ${min}` : ""}${sec !== undefined ? `, seconds to ${sec}` : ""}${ms !== undefined ? `, milliseconds to ${ms}` : ""} in UTC for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setUTCMilliseconds(ms: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the milliseconds to ${ms} in UTC for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setUTCMinutes(min: number, sec?: number, ms?: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the minutes to ${min}${sec !== undefined ? `, seconds to ${sec}` : ""}${ms !== undefined ? `, milliseconds to ${ms}` : ""} in UTC for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setUTCMonth(month: number, date?: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the month to ${month+1}${date !== undefined ? `, date to ${date}` : ""} in UTC for the date "${await this.date}"?`);
        return this.valueOf();
    }

    public async setUTCSeconds(sec: number, ms?: number): Promise<number> {
        this.date = VibeHelper.generateText(`What is the new date in ISO 8601 format after setting the seconds to ${sec}${ms !== undefined ? `, milliseconds to ${ms}` : ""} in UTC for the date "${await this.date}"?`);
        return this.valueOf();
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

    public async toLocaleDateString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): Promise<string> {
        return VibeHelper.generateText(`What is the locale date string representation of the date "${await this.date}"${options ? " given the following options in JSON format: " + JSON.stringify(options) : ""}?`);
    }

    public async toLocaleString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): Promise<string> {
        return VibeHelper.generateText(`What is the locale string representation of the date "${await this.date}"${options ? " given the following options in JSON format: " + JSON.stringify(options) : ""}?`);
    }

    public async toLocaleTimeString(locales?: string | string[], options?: Intl.DateTimeFormatOptions): Promise<string> {
        return VibeHelper.generateText(`What is the locale time string representation of the date "${await this.date}"${options ? " given the following options in JSON format: " + JSON.stringify(options) : ""}?`);
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