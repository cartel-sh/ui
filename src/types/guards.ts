import type { PostMetadata, TextOnlyMetadata, MarkdownMetadata } from "./metadata";
import type { PostMention } from "./post";

export function isTextOnlyMetadata(metadata: PostMetadata): metadata is TextOnlyMetadata {
  if (!metadata || typeof metadata !== "object") return false;
  return "content" in metadata && !("mediaMimeTypes" in metadata);
}

export function isMarkdownMetadata(metadata: PostMetadata): metadata is MarkdownMetadata {
  if (!metadata || typeof metadata !== "object") return false;
  return "mediaMimeTypes" in metadata && "content" in metadata;
}

export function isAccountMention(mention: PostMention): mention is PostMention & { account: string } {
  return "account" in mention;
}

export function isGroupMention(mention: PostMention): mention is PostMention & { group: string } {
  return "group" in mention;
}