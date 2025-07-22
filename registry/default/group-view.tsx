"use client";

import type { Group } from "@cartel-sh/ui";
import { Users } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { Card, CardContent } from "./card";

export interface GroupViewProps {
  group: Group;
  isVertical?: boolean;
  showJoin?: boolean;
  isAuthenticated?: boolean;
  memberCount?: number;
  onJoin?: () => void;
  onLeave?: () => void;
}

export function GroupView({ 
  group, 
  isVertical = false, 
  showJoin = true,
  isAuthenticated = false,
  memberCount,
  onJoin,
  onLeave
}: GroupViewProps) {
  const groupUrl = `/c/${group.address}`;
  const iconUrl = group.metadata?.icon;
  const canJoin = group.operations?.canJoin || false;
  const canLeave = group.operations?.canLeave || false;

  const handleJoinLeave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (canJoin && onJoin) {
      onJoin();
    } else if (canLeave && onLeave) {
      onLeave();
    }
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(num);
  };

  return (
    <Link href={groupUrl} className="block">
      <Card className="transition-colors cursor-pointer hover:bg-muted/30">
        <CardContent className="p-4">
          <div className={isVertical ? "flex flex-col items-center text-center" : "flex items-center gap-3"}>
            <div className="flex-shrink-0">
              {iconUrl ? (
                <img
                  src={iconUrl}
                  alt={group.metadata?.name || group.address}
                  className={isVertical ? "w-20 h-20 rounded-xl object-cover" : "w-12 h-12 rounded-xl object-cover"}
                />
              ) : (
                <div
                  className={
                    isVertical
                      ? "w-20 h-20 rounded-xl bg-secondary flex items-center justify-center"
                      : "w-12 h-12 rounded-xl bg-secondary flex items-center justify-center"
                  }
                >
                  <Users className={isVertical ? "w-10 h-10 text-muted-foreground" : "w-6 h-6 text-muted-foreground"} />
                </div>
              )}
            </div>

            <div className={isVertical ? "mt-3" : "flex-1 min-w-0"}>
              <h3 className={isVertical ? "font-semibold text-base" : "font-semibold text-base truncate"}>
                {group.metadata?.name || `Group ${group.address.slice(0, 6)}...${group.address.slice(-4)}`}
              </h3>

              {memberCount !== undefined && (
                <p className="text-sm text-muted-foreground mt-1">
                  {formatNumber(memberCount)} {memberCount === 1 ? "member" : "members"}
                </p>
              )}
            </div>

            {showJoin && isAuthenticated && (canJoin || canLeave) && (
              <Button
                size={isVertical ? "sm" : "default"}
                variant={canLeave ? "outline" : "default"}
                onClick={handleJoinLeave}
                className={isVertical ? "mt-3 w-full" : "flex-shrink-0 px-6"}
              >
                {canLeave ? "Leave" : "Join"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}