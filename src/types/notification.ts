import type { Post } from "./post";
import type { User } from "./user";

export type NotificationType =
	| "Reaction"
	| "Comment"
	| "Follow"
	| "Repost"
	| "Action"
	| "Mention"
	| "Quote"
	| "GroupMembershipRequestApproved"
	| "GroupMembershipRequestRejected"
	| "TokenDistributed";

export type Notification = {
	id: string;
	who: User[];
	actedOn?: Post;
	createdAt: Date;
	type: NotificationType;
	reactionType?: "Upvote" | "Downvote";
	actionType?: string;
	groupId?: string;
	groupName?: string;
	tokenAmount?: string;
	tokenSymbol?: string;
};
