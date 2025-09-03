import { VibeHelper } from "./vibehelper.js";

export class VibeString {
    private readonly value: string;

    public constructor(value: string) {
        this.value = value;
    }

    // Static methods
    
    public static fromCharCode(...codes: number[]): Promise<string> {
        return VibeHelper.generateText(`What is the string formed by the characters corresponding to the Unicode values [${codes.join(", ")}]?`);
    }

    public static fromCodePoint(...codePoints: number[]): Promise<string> {
        return VibeHelper.generateText(`What is the string formed by the characters corresponding to the Unicode code points [${codePoints.join(", ")}]?`);
    }

    // Instance methods

    public async charAt(index: number): Promise<string> {
        return VibeHelper.generateText(`What is the character at index ${index} in the string "${this.value}"?`);
    }

    public async charCodeAt(index: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the Unicode value of the character at index ${index} in the string "${this.value}"?`);
    }

    public async codePointAt(pos: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the Unicode code point value of the character at position ${pos} in the string "${this.value}"?`);
    }

    public async concat(...strings: string[]): Promise<string> {
        return VibeHelper.generateText(`What is the result of concatenating the string "${this.value}" with the strings [${strings.map(s => `"${s}"`).join(", ")}]?`);
    }

    public async endsWith(searchString: string, length?: number): Promise<boolean> {
        return VibeHelper.generateBoolean(`Does the string "${this.value}" end with the substring "${searchString}"${length !== undefined ? ` when considering only the first ${length} characters` : ""}?`);
    }

    public async includes(searchString: string, position?: number): Promise<boolean> {
        return VibeHelper.generateBoolean(`Does the string "${this.value}" include the substring "${searchString}"${position !== undefined ? ` starting at position ${position}` : ""}?`);
    }

    public async indexOf(searchValue: string, fromIndex?: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the index of the first occurrence of the substring "${searchValue}" in the string "${this.value}"${fromIndex !== undefined ? ` starting from index ${fromIndex}` : ""}?`);
    }

    public async lastIndexOf(searchValue: string, fromIndex?: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the index of the last occurrence of the substring "${searchValue}" in the string "${this.value}"${fromIndex !== undefined ? ` starting from index ${fromIndex}` : ""}?`);
    }

    public async length(): Promise<number> {
        return VibeHelper.generateNumber(`What is the length of the string "${this.value}"?`);
    }

    public async localeCompare(compareString: string, locales?: string | string[], options?: Intl.CollatorOptions): Promise<number> {
        return VibeHelper.generateNumber(`What is the result of comparing the string "${this.value}" with the string "${compareString}"${locales !== undefined ? ` using the locale(s) ${typeof locales === 'string' ? `"${locales}"` : `[${locales.map(l => `"${l}"`).join(", ")}]`}` : ""}${options !== undefined ? ` and the options ${JSON.stringify(options)}` : ""}? Return -1 if "${this.value}" comes before "${compareString}", 1 if it comes after, and 0 if they are equivalent.`);
    }

    public async match(regexp: RegExp | string): Promise<string[] | null> {
        return VibeHelper.generateTextArray(`What is the result of matching the string "${this.value}" against the regular expression "${regexp.toString()}"? Return an array of matches or null if no match is found.`);
    }

    public async normalize(form?: 'NFC' | 'NFD' | 'NFKC' | 'NFKD'): Promise<string> {
        return VibeHelper.generateText(`What is the normalized form (${form ?? "NFC"}) of the string "${this.value}"?`);
    }

    public async padEnd(targetLength: number, padString?: string): Promise<string> {
        return VibeHelper.generateText(`What is the result of padding the end of the string "${this.value}" to a total length of ${targetLength} using the pad string "${padString ?? " "}"?`);
    }

    public async padStart(targetLength: number, padString?: string): Promise<string> {
        return VibeHelper.generateText(`What is the result of padding the start of the string "${this.value}" to a total length of ${targetLength} using the pad string "${padString ?? " "}"?`);
    }

    public async repeat(count: number): Promise<string> {
        return VibeHelper.generateText(`What is the result of repeating the string "${this.value}" ${count} times?`);
    }

    public async replace(searchValue: string | RegExp, replaceValue: string): Promise<string> {
        return VibeHelper.generateText(`What is the result of replacing the first occurrence of "${searchValue.toString()}" in the string "${this.value}" with "${replaceValue}"?`);
    }

    public async replaceAll(searchValue: string | RegExp, replaceValue: string): Promise<string> {
        return VibeHelper.generateText(`What is the result of replacing all occurrences of "${searchValue.toString()}" in the string "${this.value}" with "${replaceValue}"?`);
    }

    public async search(regexp: RegExp | string): Promise<number> {
        return VibeHelper.generateNumber(`What is the index of the first match of the regular expression "${regexp.toString()}" in the string "${this.value}"? Return -1 if no match is found.`);
    }

    public async slice(start?: number, end?: number): Promise<string> {
        return VibeHelper.generateText(`What is the substring of the string "${this.value}" from index ${start ?? 0} to ${end !== undefined ? end : "the end"}?`);
    }

    public async split(separator: string | RegExp, limit?: number): Promise<string[]> {
        const result = await VibeHelper.generateTextArray(`What is the result of splitting the string "${this.value}" using the separator "${separator.toString()}"${limit !== undefined ? ` with a limit of ${limit}` : ""}? Return an array of substrings.`);
        return result!;
    }

    public async startsWith(searchString: string, position?: number): Promise<boolean> {
        return VibeHelper.generateBoolean(`Does the string "${this.value}" start with the substring "${searchString}"${position !== undefined ? ` at position ${position}` : ""}?`);
    }

    public async substring(start: number, end?: number): Promise<string> {
        return VibeHelper.generateText(`What is the substring of the string "${this.value}" from index ${start} to ${end !== undefined ? end : "the end"}?`);
    }

    public async toLocaleLowerCase(locales?: string | string[]): Promise<string> {
        if (locales === undefined) {
            return this.toLowerCase();
        }
        else if (typeof locales === 'string') {
            return VibeHelper.generateText(`What is the locale-aware lowercase version of the string "${this.value}" in the locale "${locales}"?`);
        }
        else {
            return VibeHelper.generateText(`What is the locale-aware lowercase version of the string "${this.value}" in the locales [${locales.join(",")}]?`);
        }
    }

    public async toLocaleUpperCase(locales?: string | string[]): Promise<string> {
        if (locales === undefined) {
            return this.toUpperCase();
        }
        else if (typeof locales === 'string') {
            return VibeHelper.generateText(`What is the locale-aware uppercase version of the string "${this.value}" in the locale "${locales}"?`);
        }
        else {
            return VibeHelper.generateText(`What is the locale-aware uppercase version of the string "${this.value}" in the locales [${locales.join(",")}]?`);
        }
    }

    public async toLowerCase(): Promise<string> {
        return VibeHelper.generateText(`What is the lowercase version of the string "${this.value}"?`);
    }

    public async toUpperCase(): Promise<string> {
        return VibeHelper.generateText(`What is the uppercase version of the string "${this.value}"?`);
    }

    public async trim(): Promise<string> {
        return VibeHelper.generateText(`What is the result of trimming the string "${this.value}"?`);
    }

    public async trimEnd(): Promise<string> {
        return VibeHelper.generateText(`What is the result of trimming the end of the string "${this.value}"?`);
    }

    public async trimStart(): Promise<string> {
        return VibeHelper.generateText(`What is the result of trimming the start of the string "${this.value}"?`);
    }

    public async valueOf(): Promise<string> {
        return this.value;
    }

    public async toString(): Promise<string> {
        return this.value;
    }
}

export default VibeString;