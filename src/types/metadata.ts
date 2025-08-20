export interface MediaAsset {
  item: string;
  type: string;
  altTag?: string;
  cover?: string;
  artist?: string;
  title?: string;
}

export interface BaseMetadata {
  content: string;
  channel?: {
    id: string;
    name: string;
    slug?: string;
  };
  channelId?: string;
}

export interface MarkdownMetadata extends BaseMetadata {
  content: string;
  mediaData?: Record<string, string>;
  tokenData?: Record<string, { symbol: string; name: string; address: string; chainId: number }>;
  mentionData?: Record<string, { account?: string; group?: string }>;
  attachments?: Array<{ item: string; type: string }>;
}

export interface ImageMetadata {
  content?: string;
  image: MediaAsset;
}

export interface VideoMetadata {
  content?: string;
  video: MediaAsset;
}

export interface AudioMetadata {
  content?: string;
  audio: MediaAsset;
}

export interface LinkMetadata {
  content?: string;
  sharingLink: string;
}

export interface EmbedMetadata {
  content?: string;
  embed: string;
}

export interface EventMetadata {
  content?: string;
  location: string;
  startsAt: string;
  endsAt?: string;
}

export type PostMetadata = MarkdownMetadata;

export type AnyMetadata = 
  | MarkdownMetadata
  | ImageMetadata
  | VideoMetadata
  | AudioMetadata
  | LinkMetadata
  | EmbedMetadata
  | EventMetadata;

export type MediaAttachment = {
  item: string;
  type: string;
};

// Legacy aliases for backward compatibility
export type TextOnlyMetadata = BaseMetadata;
export type MarkdownMetadataDetails = MarkdownMetadata;
export type PostMetadataDetails = MarkdownMetadata;