export type UserInterests = {
	category: string;
	value: string;
	label: string;
};

export type UserActions = {
	followed: boolean;
	following: boolean;
	blocked: boolean;
	muted: boolean;
};

export type UserMetadataAttribute = {
	key: string;
	value: string;
};

export type UserStats = {
	following: number;
	followers: number;
};

export type User = {
	id: string;
	name?: string;
	username?: string;
	address: string;
	namespace: string;
	actions?: UserActions;
	interests?: UserInterests[];
	createdAt?: Date;
	description?: string;
	profilePictureUrl?: string;
	metadata?: {
		attributes?: UserMetadataAttribute[];
	};
	stats?: UserStats;
};
