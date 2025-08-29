import { VibeHelper } from "./vibehelper";

export class VibeMath {
    public static E: Promise<number>;
    public static LN10: Promise<number>;
    public static LN2: Promise<number>;
    public static LOG10E: Promise<number>;
    public static LOG2E: Promise<number>;
    public static PI: Promise<number>;
    public static SQRT1_2: Promise<number>;
    public static SQRT2: Promise<number>;

    static async init() {
        VibeMath.E = VibeHelper.generateNumber("What is the value of Euler's number (e) to 15 decimal places?");
        VibeMath.LN10 = VibeHelper.generateNumber("What is the value of the natural logarithm of 10 (ln(10)) to 15 decimal places?");
        VibeMath.LN2 = VibeHelper.generateNumber("What is the value of the natural logarithm of 2 (ln(2)) to 15 decimal places?");
        VibeMath.LOG10E = VibeHelper.generateNumber("What is the value of the base-10 logarithm of e (log10(e)) to 15 decimal places?");
        VibeMath.LOG2E = VibeHelper.generateNumber("What is the value of the base-2 logarithm of e (log2(e)) to 15 decimal places?");
        VibeMath.PI = VibeHelper.generateNumber("What is the value of Pi (π) to 15 decimal places?");
        VibeMath.SQRT1_2 = VibeHelper.generateNumber("What is the value of the square root of 1/2 (√(1/2)) to 15 decimal places?");
        VibeMath.SQRT2 = VibeHelper.generateNumber("What is the value of the square root of 2 (√2) to 15 decimal places?");
    }

    public static async abs(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the absolute value of ${x}?`);
    }

    public static async acos(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the arccosine (in radians) of ${x}?`);
    }

    public static async acosh(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the inverse hyperbolic cosine (in radians) of ${x}?`);
    }

    public static async asin(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the arcsine (in radians) of ${x}?`);
    }

    public static async asinh(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the inverse hyperbolic sine (in radians) of ${x}?`);
    }

    public static async atan(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the arctangent (in radians) of ${x}?`);
    }

    public static async atanh(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the inverse hyperbolic tangent (in radians) of ${x}?`);
    }

    public static async atan2(y: number, x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the arctangent of the quotient of its arguments (atan2) for y=${y} and x=${x} in radians?`);
    }

    public static async cbrt(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the cube root of ${x}?`);
    }

    public static async ceil(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the smallest integer greater than or equal to ${x}?`);
    }

    public static async clz32(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the number of leading zero bits in the 32-bit binary representation of ${x}?`);
    }

    public static async cos(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the cosine of ${x} radians?`);
    }

    public static async cosh(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the hyperbolic cosine of ${x}?`);
    }

    public static async exp(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the value of e raised to the power of ${x}?`);
    }

    public static async expm1(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the value of e raised to the power of ${x} minus 1?`);
    }

    public static async floor(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the largest integer less than or equal to ${x}?`);
    }

    public static async fround(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the nearest 32-bit single precision float representation of ${x}?`);
    }

    public static async hypot(...values: number[]): Promise<number> {
        return VibeHelper.generateNumber(`What is the square root of the sum of the squares of the given values: [${values.join(", ")}]?`);
    }

    public static async imul(a: number, b: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the result of the 32-bit integer multiplication of ${a} and ${b}?`);
    }

    public static async log(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the natural logarithm (base e) of ${x}?`);
    }

    public static async log10(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the base-10 logarithm of ${x}?`);
    }

    public static async log1p(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the natural logarithm of 1 plus ${x} (ln(1 + ${x}))?`);
    }

    public static async log2(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the base-2 logarithm of ${x}?`);
    }

    public static async max(...values: number[]): Promise<number> {
        return VibeHelper.generateNumber(`What is the maximum value among the given values: [${values.join(", ")}]?`);
    }

    public static async min(...values: number[]): Promise<number> {
        return VibeHelper.generateNumber(`What is the minimum value among the given values: [${values.join(", ")}]?`);
    }

    public static async pow(base: number, exponent: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the value of ${base} raised to the power of ${exponent}?`);
    }

    public static async random(): Promise<number> {
        return VibeHelper.generateNumber("Generate a random floating-point number between 0 (inclusive) and 1 (exclusive).");
    }

    public static async round(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the value of ${x} rounded to the nearest integer?`);
    }

    public static async sign(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the sign of ${x}? Return 1 for positive, -1 for negative, and 0 for zero.`);
    }

    public static async sin(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the sine (in radians) of ${x}?`);
    }

    public static async sinh(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the hyperbolic sine of ${x}?`);
    }

    public static async sqrt(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the square root of ${x}?`);
    }

    public static async tan(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the tangent (in radians) of ${x}?`);
    }

    public static async tanh(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the hyperbolic tangent of ${x}?`);
    }

    public static async trunc(x: number): Promise<number> {
        return VibeHelper.generateNumber(`What is the integer part of ${x} by removing any fractional digits?`);
    }
}

VibeMath.init();