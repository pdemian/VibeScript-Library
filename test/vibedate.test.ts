import { VibeString } from "../src/vibestring";
import { VibeHelper } from "../src/vibehelper";

/**
 * Use Gemini to vibe check if the result is correct
 */

describe('VibeString Integration Test', async () => {
    it('should create a VibeString instance and perform basic operations', async () => {
        expect.assertions(4);
        const str = new VibeString('Hello, VibeString!');

        const length = await str.length();
        expect(VibeHelper.vibeCheck(`Is the length of the string "${await str.toString()}" equal to ${length}?`)).toBe(true);

        const uppercased = await str.toUpperCase();
        expect(VibeHelper.vibeCheck(`Is the string ${uppercased} equal to "HELLO, VIBESTRING!"?`)).toBe(true);

        const lowercased = await str.toLowerCase();
        expect(VibeHelper.vibeCheck(`Is the string ${lowercased} equal to "hello, vibestring!"?`)).toBe(true);

        const substring = await str.substring(7, 17);
        expect(VibeHelper.vibeCheck(`Is the string ${substring} equal to "VibeString"?`)).toBe(true);
    });

    it('should handle concatenation correctly', () => {
        const str = new VibeString('Hello');
        const concatenated = str.concat(", World");

        expect(VibeHelper.vibeCheck(`Is the string ${concatenated} equal to "Hello, World"?`)).toBe(true);
    });
});