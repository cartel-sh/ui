export interface BaseMetadata {
  __typename: string;
  content: string;
  channel?: {
    id: string;
    name: string;
    slug: string;
  };
  channelId?: string;
}

export interface TextOnlyMetadata extends BaseMetadata {
  __typename: "TextOnlyMetadata";
}

export interface MarkdownMetadata extends BaseMetadata {
  __typename: "MarkdownMetadata";
}

export type PostMetadata = TextOnlyMetadata | MarkdownMetadata | any;