"use client";

import type { User } from "@cartel-sh/ui";
import * as React from "react";
import { type PropsWithChildren, useState } from "react";
import { Badge } from "./badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Skeleton } from "./skeleton";
import { UserAvatar } from "./user-avatar";
import { FollowButton } from "./follow-button";

export interface UserCardProps extends PropsWithChildren {
  handle?: string;
  user?: User;
  onLoadUser?: (handle: string) => Promise<User>;
}

export const UserCard = ({ children, handle, user: providedUser, onLoadUser }: UserCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | undefined>(providedUser);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadUser = async () => {
    if (!handle || !onLoadUser || user) return;
    
    setIsLoading(true);
    setError(null);
    try {
      const loadedUser = await onLoadUser(handle);
      setUser(loadedUser);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load user");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (isOpen && !user && handle && onLoadUser) {
      loadUser();
    }
  }, [isOpen, handle]);

  const isFollowingMe = user?.actions?.following;

  return (
    <HoverCard defaultOpen={false} onOpenChange={setIsOpen}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-[20rem] not-prose" side="top">
        {isLoading && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-start gap-2 text-base">
              <div className="flex flex-row items-center gap-4 flex-1 min-w-0">
                <Skeleton className="w-16 h-16 rounded-full flex-shrink-0" />
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
            <div className="mt-2 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="mt-3">
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        )}
        {error && <div>Error: {error}</div>}
        {user && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-start gap-2 text-base">
              <div className="flex flex-row items-center gap-4 flex-1 min-w-0">
                <div className="w-16 h-16 flex-shrink-0">
                  <UserAvatar link={false} user={user} />
                </div>
                <div className="flex flex-wrap gap-2 min-w-0 flex-1">
                  <span className="font-bold truncate text-lg">{user.username}</span>
                  {isFollowingMe && (
                    <Badge className="text-sm h-fit w-fit mt-1" variant="secondary">
                      Follows you
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-2 leading-5">
              <p className="text-sm line-clamp-5">{user.description}</p>
            </div>
            <div className="mt-3">
              <FollowButton user={user} />
            </div>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};