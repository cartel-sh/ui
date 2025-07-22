"use client";
import { useState } from "react";
import { Heart, MessageCircle, Repeat2, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "./button";
import { cn } from "../../lib/utils";

export type ReactionType = "Upvote" | "Downvote" | "Like" | "Comment" | "Repost";

export interface ReactionButtonProps {
  type: ReactionType;
  count?: number;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const reactionIcons = {
  Upvote: ArrowUp,
  Downvote: ArrowDown,
  Like: Heart,
  Comment: MessageCircle,
  Repost: Repeat2,
};

export function ReactionButton({ 
  type, 
  count = 0, 
  active = false, 
  disabled = false,
  onClick,
  className 
}: ReactionButtonProps) {
  const [isActive, setIsActive] = useState(active);
  const Icon = reactionIcons[type];

  const handleClick = () => {
    if (!disabled) {
      setIsActive(!isActive);
      onClick?.();
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        "h-auto px-2 py-1 gap-1",
        isActive && type === "Upvote" && "text-green-500",
        isActive && type === "Downvote" && "text-red-500",
        isActive && type === "Like" && "text-red-500",
        isActive && type === "Repost" && "text-blue-500",
        className
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      <Icon className="h-4 w-4" />
      {count > 0 && <span className="text-xs">{count}</span>}
    </Button>
  );
}