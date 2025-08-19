export interface BaseMetadata {
  content?: string;
  channel?: {
    id: string;
    name: string;
    slug?: string;
  };
  channelId?: string;
  tokenMetadata?: Record<string, { symbol: string; name: string; address: string; chainId: number }>;
}

export interface TextOnlyMetadata extends BaseMetadata {
  content: string;
}

export interface MarkdownMetadata extends BaseMetadata {
  content: string;
  mediaMimeTypes?: Record<string, string>;
}

export type PostMetadata = TextOnlyMetadata | MarkdownMetadata | any;