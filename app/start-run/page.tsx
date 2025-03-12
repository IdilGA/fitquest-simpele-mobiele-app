"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Play, Volume2, Users, Clock, MapPin } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { BuddySelector } from "@/components/buddy-selector"
import { AudioSettings } from "@/components/audio-settings"

export default function StartRunPage() {
  const [showBuddySelector, setShowBuddySelector] = useState(false)
  const [showAudioSettings, setShowAudioSettings] = useState(false)
  const [selectedBuddy, setSelectedBuddy] = useState<string | null>(null)

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <header className="flex items-center mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Start Buddy Run</h1>
      </header>

      <section className="mb-8">
        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Run Instellingen</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-500" />
                  <Label htmlFor="run-type">Type Hardloop</Label>
                </div>
                <Select defaultValue="regular">
                  <SelectTrigger id="run-type" className="w-[140px]">
                    <SelectValue placeholder="Selecteer type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regulier</SelectItem>
                    <SelectItem value="interval">Interval</SelectItem>
                    <SelectItem value="tempo">Tempo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <Label htmlFor="run-location">Locatie</Label>
                </div>
                <Select defaultValue="park">
                  <SelectTrigger id="run-location" className="w-[140px]">
                    <SelectValue placeholder="Selecteer locatie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="park">Stadspark</SelectItem>
                    <SelectItem value="forest">Bos Route</SelectItem>
                    <SelectItem value="beach">Strand Route</SelectItem>
                    <SelectItem value="custom">Aangepast</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-5 w-5 text-green-500" />
                  <Label htmlFor="audio-guidance">Audio Begeleiding</Label>
                </div>
                <Switch id="audio-guidance" defaultChecked onCheckedChange={setShowAudioSettings} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" />
                  <Label htmlFor="invite-buddy">Kies een Buddy</Label>
                </div>
                <Switch id="invite-buddy" checked={showBuddySelector} onCheckedChange={setShowBuddySelector} />
              </div>
            </div>
          </CardContent>
        </Card>

        {showAudioSettings && <AudioSettings />}

        {showBuddySelector && (
          <BuddySelector onSelect={(buddy) => setSelectedBuddy(buddy)} selectedBuddy={selectedBuddy} />
        )}

        <Link href={selectedBuddy ? "/active-run" : "#"}>
          <Button
            className="w-full py-6 text-lg flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
            disabled={showBuddySelector && !selectedBuddy}
          >
            <Play className="h-5 w-5" /> Start Buddy Run
          </Button>
        </Link>
        {showBuddySelector && !selectedBuddy && (
          <p className="text-center text-sm text-muted-foreground mt-2">Selecteer een buddy om te beginnen</p>
        )}
      </section>
    </div>
  )
}

