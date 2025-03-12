"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Pause, CircleStopIcon as Stop, Volume2, VolumeX, MapPin, Clock, Phone, MicOff, Headphones } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { LiveCallPanel } from "@/components/live-call-panel"
import { RunMap } from "@/components/run-map"

export default function ActiveRunPage() {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [isRunning, setIsRunning] = useState(true)
  const [distance, setDistance] = useState(0)
  const [pace, setPace] = useState("0:00")
  const [buddyPace, setBuddyPace] = useState("0:00")
  const [showMap, setShowMap] = useState(false)
  const [showCall, setShowCall] = useState(false)
  const [audioMuted, setAudioMuted] = useState(false)

  // Simulate running progress
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1)
        setDistance((prev) => prev + 0.01)

        // Update pace every 10 seconds
        if (elapsedTime % 10 === 0) {
          const paceMin = 5 + Math.floor(Math.random() * 1)
          const paceSec = Math.floor(Math.random() * 60)
          setPace(`${paceMin}:${paceSec.toString().padStart(2, "0")}`)

          // Update buddy pace
          const buddyPaceMin = 5 + Math.floor(Math.random() * 1)
          const buddyPaceSec = Math.floor(Math.random() * 60)
          setBuddyPace(`${buddyPaceMin}:${buddyPaceSec.toString().padStart(2, "0")}`)
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isRunning, elapsedTime])

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-600">Buddy Run</h1>
        <p className="text-muted-foreground">Samen met Joost Verhoeven</p>
      </header>

      <section className="mb-6">
        <Card className="mb-4">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Tijd</p>
                <p className="text-2xl font-bold">{formatTime(elapsedTime)}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Afstand</p>
                <p className="text-2xl font-bold">{distance.toFixed(2)} km</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Tempo</p>
                <p className="text-2xl font-bold">{pace}/km</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>0 km</span>
                <span>5 km</span>
              </div>
              <Progress value={distance * 20} className="h-2 bg-green-200" indicatorClassName="bg-green-600" />
            </div>

            <div className="flex justify-center gap-4">
              <Button
                variant={isRunning ? "default" : "outline"}
                size="icon"
                className="h-12 w-12 rounded-full bg-green-600 hover:bg-green-700"
                onClick={() => setIsRunning(!isRunning)}
              >
                {isRunning ? <Pause className="h-6 w-6" /> : <Clock className="h-6 w-6" />}
              </Button>

              <Link href="/run-summary">
                <Button variant="destructive" size="icon" className="h-12 w-12 rounded-full">
                  <Stop className="h-6 w-6" />
                </Button>
              </Link>

              <Button
                variant={showCall ? "default" : "outline"}
                size="icon"
                className={`h-12 w-12 rounded-full ${showCall ? "bg-green-600 hover:bg-green-700" : ""}`}
                onClick={() => setShowCall(!showCall)}
              >
                <Phone className="h-6 w-6" />
              </Button>

              <Button
                variant={showMap ? "default" : "outline"}
                size="icon"
                className={`h-12 w-12 rounded-full ${showMap ? "bg-green-600 hover:bg-green-700" : ""}`}
                onClick={() => setShowMap(!showMap)}
              >
                <MapPin className="h-6 w-6" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {showMap && (
          <Card className="mb-4">
            <CardContent className="p-0 overflow-hidden rounded-lg">
              <RunMap />
            </CardContent>
          </Card>
        )}

        {showCall && (
          <LiveCallPanel
            buddyName="Joost Verhoeven"
            isMuted={audioMuted}
            onMuteToggle={() => setAudioMuted(!audioMuted)}
          />
        )}

        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-3">Buddy Status</h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>JV</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Joost Verhoeven</p>
                    <div className="flex items-center gap-1">
                      <Badge variant="outline" className="text-xs py-0">
                        {(distance + 0.2).toFixed(1)} km
                      </Badge>
                      <Badge variant="outline" className="text-xs py-0">
                        {buddyPace}/km
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-green-600 font-medium">200m voor</p>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Tempo verschil</p>
                <Badge className="bg-green-600">+5 sec/km sneller</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Je buddy loopt momenteel iets sneller dan jij. Probeer je tempo te verhogen om bij te blijven!
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Card className="bg-green-600/5 border-none">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            {audioMuted ? (
              <VolumeX className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Volume2 className="h-5 w-5 text-green-600" />
            )}
            <div className="flex-1">
              <p className="font-medium">Audio Begeleiding</p>
              <p className="text-xs text-muted-foreground">
                "Je buddy is 200m voor je. Verhoog je tempo om bij te blijven!"
              </p>
            </div>
            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setAudioMuted(!audioMuted)}>
              {audioMuted ? <Headphones className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

