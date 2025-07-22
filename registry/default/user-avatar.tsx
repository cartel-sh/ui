import type { User } from "@cartel-sh/ui";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export interface UserAvatarProps {
  user: User;
  link?: boolean;
  className?: string;
}

export function UserAvatar({ user, link = true, className }: UserAvatarProps) {
  const fallback = user?.username?.slice(0, 2) ?? "";
  
  const avatar = (
    <Avatar suppressHydrationWarning className={className}>
      <AvatarImage alt={user?.profilePictureUrl} src={user?.profilePictureUrl} className="object-cover" />
      <AvatarFallback>{fallback.toLowerCase()}</AvatarFallback>
    </Avatar>
  );
  
  if (link) {
    return (
      <Link href={`/u/${user.username}`} prefetch>
        {avatar}
      </Link>
    );
  }
  
  return avatar;
}

export interface UserAvatarArrayProps {
  users: User[];
  amountTruncated?: number;
}

export function UserAvatarArray({ users, amountTruncated }: UserAvatarArrayProps) {
  const formatAmount = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(amountTruncated || 0);

  return (
    <div className="flex flex-row pl-4">
      {users.map((user, index) => (
        <div key={`${user.id}-${index}`} className="w-10 h-10 -ml-4">
          <UserAvatar link={true} user={user} className="w-full h-full" />
        </div>
      ))}
      {amountTruncated ? (
        <div className="w-10 h-10 -ml-4 rounded-full border-2 text-card-foreground text-base backdrop-blur-md border-accent text-center justify-center items-center flex z-10">
          +{formatAmount}
        </div>
      ) : null}
    </div>
  );
}

export function getStampUrl(address: string): string {
  return `https://cdn.stamp.fyi/avatar/${address}?s=140`;
}