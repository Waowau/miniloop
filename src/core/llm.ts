import "dotenv/config";
import { GoogleGenAI } from '@google/genai';
import { Message } from './types.js';


const MODEL = "gemini-3-flash-preview";
const ai = new GoogleGenAI({});

interface ProviderMessage {
  role: "user" | 'model';
  parts: { text: string; }[]
}

function mapHistory(conversationHistory: Message[]): ProviderMessage[] {
  let adaptedHistory: ProviderMessage[] = conversationHistory.map(item =>  {
    return { role: item.role, parts: [{text: item.content }] };
  });
  return adaptedHistory;
}

async function chat (conversationHistory: Message[]): Promise<string> {
  let res: string = "";
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: mapHistory(conversationHistory)
  });
  if (response.text != undefined) { 
    res = response.text;
  } else {
    throw new Error("API Response Undefined!");
  }
  return res;
}

export { chat };
