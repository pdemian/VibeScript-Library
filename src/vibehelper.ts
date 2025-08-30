import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

export class VibeHelper {
    private static instance: GoogleGenAI | null = null;
    private static config = {
        thinkingConfig: {
            includeThoughts: false,
        },
        automaticFunctionCalling: {
            disable: true,
        }
    }

    private constructor() {}

    private static getInstance(): GoogleGenAI {
        if (!VibeHelper.instance) {
            VibeHelper.instance = new GoogleGenAI({ apiKey: GEMINI_API_KEY});
        }
        return VibeHelper.instance;
    }

    public static async generateNumber(prompt: string): Promise<number> {
        const genAI = VibeHelper.getInstance();
        const response = await genAI.models.generateContent({
            model: GEMINI_MODEL,
            contents: prompt,
            config: {
                systemInstruction: "You are an expert at Javascript. Answer the question and return only the number. Do not include any explanations or additional text. Do not include code blocks.",
                ...VibeHelper.config,
            }
        });

        if(response.text === undefined) {
            throw new Error("No response from Gemini API");
        }

        return Number(response.text);
    }

    public static async generateBoolean(prompt: string): Promise<boolean> {
        const genAI = VibeHelper.getInstance();
        const response = await genAI.models.generateContent({
            model: GEMINI_MODEL,
            contents: prompt,
            config: {
                systemInstruction: "You are an expert at Javascript. Answer the question and return only true or false without quotes. Do not include any explanations or additional text. Do not include code blocks.",
                ...VibeHelper.config,
            }
        });

        if(response.text === undefined) {
            throw new Error("No response from Gemini API");
        }

        return Boolean(response.text);
    }

    public static async generateText(prompt: string): Promise<string> {
        const genAI = VibeHelper.getInstance();
        const response = await genAI.models.generateContent({
            model: GEMINI_MODEL,
            contents: prompt,
            config: {
                systemInstruction: "You are an expert at Javascript. Answer the question and return only the result. Do not include any explanations or additional text. Do not include code blocks.",
                ...VibeHelper.config,
            }
        });

        if(response.text === undefined) {
            throw new Error("No response from Gemini API");
        }

        return response.text;
    }

    public static async generateTextArray(prompt: string): Promise<string[] | null> {
        const genAI = VibeHelper.getInstance();
        const response = await genAI.models.generateContent({
            model: GEMINI_MODEL,
            contents: prompt,
            config: {
                systemInstruction: "You are an expert at Javascript. Answer the question and return only the result in array format (eg, [1,2,3]). Do not include any explanations or additional text. Do not include code blocks.",
                ...VibeHelper.config,
            }
        });

        if(response.text === undefined) {
            throw new Error("No response from Gemini API");
        }

        if(response.text[0] !== '[' || response.text[response.text.length - 1] !== ']') {
            throw new Error("Response is not in array format");
        }

        if(response.text === "null") {
            return [];
        }

        return response.text.substring(1, response.text.length-1).split(",");
    }

    // just for the aura
    public static async vibeCheck(prompt: string): Promise<boolean> {
        return VibeHelper.generateBoolean(prompt);
    }
}