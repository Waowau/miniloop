interface Message {
  role: 'user' | 'model';
  content: string;
}

export type { Message };