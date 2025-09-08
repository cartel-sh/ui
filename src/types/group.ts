export type GroupOperations = {
	isBanned: boolean;
	canJoin: boolean;
	canLeave: boolean;
	canPost: boolean;
};

export type GroupMetadata = {
	name: string;
	slug: string;
	description?: string;
	icon?: string;
	coverPicture?: string;
	hook?: string;
};

export type GroupRules = {
	title: string;
	description: string;
};

export type Group = {
	id: string;
	address: string;
	timestamp: Date;
	metadata: GroupMetadata;
	operations?: GroupOperations;
	rules?: GroupRules[];
	owner?: string;
	feed?: {
		address: string;
	};
	isBanned?: boolean;
	canJoin?: boolean;
	canLeave?: boolean;
	canPost?: boolean;
};
