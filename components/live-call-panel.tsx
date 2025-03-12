"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MicOff, Mic, PhoneOff } from "lucide-react"

interface LiveCallPanelProps {
  buddyName: string
  isMuted: boolean
  onMuteToggle: () => void
}

export function LiveCallPanel({ buddyName, isMuted, onMuteToggle }: LiveCallPanelProps) {
  return (
    <Card className="mb-4 border-green-600/30">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Live Gesprek</h2>
          <div className="flex items-center gap-1 text-xs bg-green-600/10 text-green-600 px-2 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Actief
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback>JV</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{buddyName}</p>
              <p className="text-xs text-muted-foreground">
                {isMuted ? "Je microfoon is gedempt" : "Je microfoon is actief"}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant={isMuted ? "outline" : "default"}
              size="icon"
              className={isMuted ? "" : "bg-green-600 hover:bg-green-700"}
              onClick={onMuteToggle}
            >
              {isMuted ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
            </Button>

            <Button variant="destructive" size="icon">
              <PhoneOff className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

