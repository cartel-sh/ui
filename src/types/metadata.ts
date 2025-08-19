export interface BaseMetadata {
  __typename: string;
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
  __typename: "TextOnlyMetadata";
  content: string;
}

export interface MarkdownMetadata extends BaseMetadata {
  __typename: "MarkdownMetadata";
  content: string;
}

export type PostMetadata = TextOnlyMetadata | MarkdownMetadata | any;