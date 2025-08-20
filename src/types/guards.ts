import type { 
  PostMetadata, 
  MarkdownMetadata,
  MediaMetadata,
  ImageMetadata,
  VideoMetadata,
  AudioMetadata,
  LinkMetadata,
  EmbedMetadata,
  EventMetadata,
  AnyMetadata
} from "./metadata";
import type { PostMention } from "./post";

export function isMarkdownMetadata(metadata: any): metadata is MarkdownMetadata {
  return metadata && typeof metadata.content === "string" && !("attachments" in metadata);
}

export function isMediaMetadata(metadata: any): metadata is MediaMetadata {
  return metadata && "attachments" in metadata && Array.isArray(metadata.attachments);
}

export function isImageMetadata(metadata: any): metadata is ImageMetadata {
  return metadata && "image" in metadata && metadata.image?.item;
}

export function isVideoMetadata(metadata: any): metadata is VideoMetadata {
  return metadata && "video" in metadata && metadata.video?.item;
}

export function isAudioMetadata(metadata: any): metadata is AudioMetadata {
  return metadata && "audio" in metadata && metadata.audio?.item;
}

export function isLinkMetadata(metadata: any): metadata is LinkMetadata {
  return metadata && "sharingLink" in metadata;
}

export function isEmbedMetadata(metadata: any): metadata is EmbedMetadata {
  return metadata && "embed" in metadata;
}

export function isEventMetadata(metadata: any): metadata is EventMetadata {
  return metadata && "location" in metadata && "startsAt" in metadata;
}

// Legacy alias
export function isTextOnlyMetadata(metadata: any): metadata is MarkdownMetadata {
  return isMarkdownMetadata(metadata);
}

export function isAccountMention(mention: PostMention): mention is PostMention & { account: string } {
  return "account" in mention;
}

export function isGroupMention(mention: PostMention): mention is PostMention & { group: string } {
  return "group" in mention;
}