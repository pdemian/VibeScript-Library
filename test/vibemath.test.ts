import { VibeMath } from "../src/vibemath";
import { VibeHelper } from "../src/vibehelper";

/**
 * Use Gemini to vibe check if the result is correct
 */

describe('VibeMath Integration Test', async () => {
    it("should perform basic math operations and vibe check the results", async () => {
        expect.assertions(4);

        expect(VibeHelper.vibeCheck(`Is ${await VibeMath.E} the value of the mathematical constant e?`)).toBe(true);
        expect(VibeHelper.vibeCheck(`Is ${await VibeMath.PI} the value of the mathematical constant pi?`)).toBe(true);
        expect(VibeHelper.vibeCheck(`Is ${await VibeMath.abs(-42)} the absolute value of -42?`)).toBe(true);
        expect(VibeHelper.vibeCheck(`Is ${await VibeMath.sqrt(16)} the square root of 16?`)).toBe(true);
    });
});