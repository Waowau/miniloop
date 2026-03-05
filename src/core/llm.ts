import "dotenv/config";
import { Message, Response } from './types.js';
import * as gemini from '../providers/gemini.js';

const provider = process.env.PROVIDER;
async function chat (conversationHistory: Message[]): Promise<Response> {
  switch (provider) {
    case "GEMINI":
      return gemini.chat(conversationHistory);
    default:
      throw new Error("No provider defined in .env!");
  }
}

export { chat };