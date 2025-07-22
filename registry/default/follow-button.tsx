"use client";
import { useState } from "react";
import type { User } from "@cartel-sh/ui";
import { Button } from "./button";

export interface FollowButtonProps {
  user: User;
  size?: "default" | "sm" | "lg" | "icon";
  onFollow?: (userId: string) => Promise<void>;
  onUnfollow?: (userId: string) => Promise<void>;
}

export function FollowButton({ user, size = "sm", onFollow, onUnfollow }: FollowButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(user?.actions?.followed || false);

  const handleClick = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      if (isFollowing) {
        await onUnfollow?.(user.id);
        setIsFollowing(false);
      } else {
        await onFollow?.(user.id);
        setIsFollowing(true);
      }
    } catch (error) {
      console.error("Failed to update follow status:", error);
      // Revert optimistic update
      setIsFollowing(!isFollowing);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      size={size}
      variant={isFollowing ? "outline" : "default"}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? "..." : isFollowing ? "Following" : "Follow"}
    </Button>
  );
}