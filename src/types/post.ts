import type { User } from "./user";
import type { PostMetadata } from "./metadata";

export type PostReactionType = "Repost" | "Comment" | "Bookmark" | "Collect";

export type PostReactions = Record<PostReactionType, number> & {
  totalReactions: number;
  upvotes: number;
  isUpvoted?: boolean;
  isBookmarked?: boolean;
  isCollected?: boolean;
  isReposted?: boolean;
  canComment: boolean;
  canRepost: boolean;
  canCollect: boolean;
  canQuote: boolean;
  canDecrypt: boolean;
  canEdit: boolean;
};

export type PostPlatform = "lens" | "bsky" | "ecp";

export type PostActions = {
  canComment: boolean;
  canRepost: boolean;
  canCollect: boolean;
};

export type PostMention =
  | {
      account: string;
      namespace?: string;
      localName?: string;
      replace?: {
        from: string;
        to: string;
      };
    }
  | { group: string };

export type Post = {
  id: string;
  platform: PostPlatform;
  author: User;
  createdAt: Date;
  comments: Post[];
  metadata: PostMetadata;
  mentions?: PostMention[];
  reactions?: Partial<PostReactions>;
  updatedAt?: Date;
  commentOn?: Post;
  quoteOn?: Post;
  reply?: Post;
  isRepost?: boolean;
  repostedBy?: User;
  repostedAt?: Date;
  isEdited?: boolean;
};
