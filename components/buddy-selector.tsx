"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface BuddySelectorProps {
  onSelect: (buddyId: string) => void
  selectedBuddy: string | null
}

export function BuddySelector({ onSelect, selectedBuddy }: BuddySelectorProps) {
  const buddies = [
    {
      id: "JV",
      name: "Joost Verhoeven",
      status: "Online",
      lastRun: "Gisteren",
      relationship: "Vriend",
    },
    {
      id: "LB",
      name: "Lisa Bakker",
      status: "Online",
      lastRun: "3 dagen geleden",
      relationship: "Collega",
    },
    {
      id: "MK",
      name: "Mark Koning",
      status: "Offline",
      lastRun: "1 week geleden",
      relationship: "Hardloopclub",
    },
  ]

  return (
    <Card className="mb-4 border-green-600/30">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4">Kies een Buddy</h2>

        <div className="space-y-3">
          {buddies.map((buddy) => (
            <div
              key={buddy.id}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                selectedBuddy === buddy.id
                  ? "bg-green-600/10 border border-green-600/30"
                  : "hover:bg-accent/10 border border-transparent"
              }`}
              onClick={() => onSelect(buddy.id)}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarFallback>{buddy.id}</AvatarFallback>
                  </Avatar>
                  {buddy.status === "Online" && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                  )}
                </div>
                <div>
                  <p className="font-medium">{buddy.name}</p>
                  <p className="text-xs text-muted-foreground">{buddy.relationship}</p>
                </div>
              </div>
              <div>
                <Badge
                  variant={buddy.status === "Online" ? "default" : "outline"}
                  className={buddy.status === "Online" ? "bg-green-600" : ""}
                >
                  {buddy.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

