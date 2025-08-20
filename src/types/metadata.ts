export interface MediaAsset {
  item: string;
  type: string;
  altTag?: string;
  cover?: string;
  artist?: string;
  title?: string;
}

export interface MediaData {
  [url: string]: string; // URL to MIME type mapping
}

export interface TokenInfo {
  symbol: string;
  name: string;
  address: string;
  chainId: number;
}

export interface TokenData {
  [tokenId: string]: TokenInfo;
}

export interface MentionInfo {
  account?: string;
  group?: string;
}

export interface MentionData {
  [mentionId: string]: MentionInfo;
}

export interface MediaAttachment {
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
}

export interface MarkdownMetadata extends BaseMetadata {
  content: string;
  mediaData?: MediaData;
  tokenData?: TokenData;
  mentionData?: MentionData;
}

export interface MediaMetadata {
  content?: string;
  attachments: MediaAttachment[];
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
  | MediaMetadata
  | ImageMetadata
  | VideoMetadata
  | AudioMetadata
  | LinkMetadata
  | EmbedMetadata
  | EventMetadata;


// Legacy aliases for backward compatibility
export type TextOnlyMetadata = BaseMetadata;
export type MarkdownMetadataDetails = MarkdownMetadata;
export type PostMetadataDetails = MarkdownMetadata;