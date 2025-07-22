"use client";
import { useState } from "react";
import { PostReactionType } from "@cartel-sh/ui";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { ReactionIcon } from "./reaction-icon";
import { cn } from "../../lib/utils";

export interface ReactionButtonProps {
  type: PostReactionType | "Like";
  count?: number;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "post" | "comment";
  showTooltip?: boolean;
}

export function ReactionButton({ 
  type, 
  count = 0, 
  active = false, 
  disabled = false,
  onClick,
  className,
  variant = "post",
  showTooltip = true
}: ReactionButtonProps) {
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    if (!disabled) {
      setIsActive(!isActive);
      onClick?.();
    }
  };

  const button = (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        "h-auto px-2 py-1 gap-1 hover:bg-transparent",
        className
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      <ReactionIcon reaction={type} pressed={isActive} variant={variant} />
      {count > 0 && <span className="text-xs">{count}</span>}
    </Button>
  );

  if (!showTooltip) {
    return button;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {button}
        </TooltipTrigger>
        <TooltipContent>
          <p>{type}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}