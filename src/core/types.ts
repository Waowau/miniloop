interface Message {
  role: 'user' | 'model';
  content: string;
}

interface ParameterSchema {
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  description: string;
  enum?: string[];
}

interface Tool {
  name: string;
  description: string;
  parameters: {
    properties: Record<string, ParameterSchema>;
    required?: string[];
  }
}

interface TextResponse {
  type: 'text';
  content: string;
}

interface ToolCallResponse {
  type: 'tool_call';
  name: string;
  args: Record<string, any>;
}

type Response = TextResponse | ToolCallResponse;

export type { Message, ParameterSchema, Tool, TextResponse, ToolCallResponse, Response };