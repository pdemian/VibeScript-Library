# VibeScript-Library
An LLM based Typescript/Javascript library

Drop in replacement for most used library functions using Gemini AI.

## Examples

### 👨‍🦳 Old, tired, boring way
```typescript
const sqrt = Math.sqrt(27);
console.log(sqrt); // 5.196152422706632
```

### 🚀 New, radical, AI first way
```typescript
const sqrt = await VibeMath.sqrt(27); // uses a gallon of water
console.log(sqrt); // 5.196152422706632 probably
```

### Other examples
```typescript
const date = new VibeDate();
console.log(await date.getFullYear()); // Life is like a box of chocolates, you never know what year you're going to get
```

```typescript
const concat = await new VibeString("Hello").concat(", World"); 
console.log(concat); // "The model is overloaded. Please try again later."
```

## Leave your colleagues in the dust with AI's impressive speed

![Benchmark results](benchmark.png)

## Tested for the best vibes

We use state of the art AI to validate the library's output

```typescript
vibeCheck(`Is ${await VibeMath.E} the value of the mathematical constant e?`)
vibeCheck(`Is ${await VibeMath.PI} the value of the mathematical constant pi?`)
vibeCheck(`Is ${await VibeMath.abs(-42)} the absolute value of -42?`)
vibeCheck(`Is ${await VibeMath.sqrt(16)} the square root of 16?`)
```

## Installation
- Get a Gemini API Key from [Google AI Studio](https://aistudio.google.com/apikey)
- Add `GEMINI_API_KEY=...` to your environment 
- Run `npm install vibescript-library`
