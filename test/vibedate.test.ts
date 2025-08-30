import { VibeDate } from "../src/vibedate";
import { VibeHelper } from "../src/vibehelper";

/**
 * Use Gemini to vibe check if the result is correct
 */

describe('VibeDate Integration Test', async () => {
    it('should create a VibeDate instance and perform basic operations', async () => {
        expect.assertions(4);

        const date = new VibeDate('2023-10-01T12:00:00Z');
        const year = await date.getFullYear();
        expect(VibeHelper.vibeCheck(`Is the year of the date "${await date.toString()}" equal to ${year}?`)).toBe(true);
        const month = await date.getMonth();
        expect(VibeHelper.vibeCheck(`Is the month of the date "${await date.toString()}" equal to ${month}?`)).toBe(true);
        const day = await date.getDate();
        expect(VibeHelper.vibeCheck(`Is the day of the date "${await date.toString()}" equal to ${day}?`)).toBe(true);

        await date.setDate(await date.getDate() + 5);
        expect(VibeHelper.vibeCheck(`Is the new date after adding 5 days equal to "${await date.toString()}"?`)).toBe(true);
    });
});