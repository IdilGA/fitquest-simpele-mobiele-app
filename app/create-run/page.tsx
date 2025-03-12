"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, MapPin, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AvatarGroup } from "@/components/ui/avatar-group"
import { Switch } from "@/components/ui/switch"

export default function CreateRunPage() {
  const [selectedContacts, setSelectedContacts] = useState<string[]>(["JV", "LB"])

  const toggleContact = (id: string) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter((contactId) => contactId !== id))
    } else {
      setSelectedContacts([...selectedContacts, id])
    }
  }

  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <header className="flex items-center mb-6">
        <Link href="/planned-runs">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Nieuwe Hardloopsessie</h1>
      </header>

      <section className="mb-6">
        <Card className="mb-4">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Details</h2>

            <div className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="run-name">Naam</Label>
                <Input id="run-name" placeholder="Bijv. Avond Hardloop" />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="run-date">Datum</Label>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Input id="run-date" type="date" />
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="run-time">Tijd</Label>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <Input id="run-time" type="time" />
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="run-location">Locatie</Label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <Input id="run-location" placeholder="Bijv. Stadspark" />
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="run-distance">Afstand</Label>
                <Select>
                  <SelectTrigger id="run-distance">
                    <SelectValue placeholder="Selecteer afstand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3k">3 km</SelectItem>
                    <SelectItem value="5k">5 km</SelectItem>
                    <SelectItem value="10k">10 km</SelectItem>
                    <SelectItem value="15k">15 km</SelectItem>
                    <SelectItem value="21k">Halve marathon (21 km)</SelectItem>
                    <SelectItem value="custom">Aangepaste afstand</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="run-type">Type Hardloop</Label>
                <Select>
                  <SelectTrigger id="run-type">
                    <SelectValue placeholder="Selecteer type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regulier</SelectItem>
                    <SelectItem value="interval">Interval</SelectItem>
                    <SelectItem value="tempo">Tempo</SelectItem>
                    <SelectItem value="recovery">Herstel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Label htmlFor="audio-guidance">Audio Begeleiding</Label>
                </div>
                <Switch id="audio-guidance" defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Nodig Vrienden Uit</h2>
              <Link href="/my-contacts">
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>JV</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Joost Verhoeven</p>
                    <p className="text-xs text-muted-foreground">Vriend</p>
                  </div>
                </div>
                <Switch checked={selectedContacts.includes("JV")} onCheckedChange={() => toggleContact("JV")} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>LB</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Lisa Bakker</p>
                    <p className="text-xs text-muted-foreground">Collega</p>
                  </div>
                </div>
                <Switch checked={selectedContacts.includes("LB")} onCheckedChange={() => toggleContact("LB")} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Mark Koning</p>
                    <p className="text-xs text-muted-foreground">Hardloopclub</p>
                  </div>
                </div>
                <Switch checked={selectedContacts.includes("MK")} onCheckedChange={() => toggleContact("MK")} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>EV</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Emma Visser</p>
                    <p className="text-xs text-muted-foreground">Zus</p>
                  </div>
                </div>
                <Switch checked={selectedContacts.includes("EV")} onCheckedChange={() => toggleContact("EV")} />
              </div>
            </div>

            {selectedContacts.length > 0 && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm mb-2">Geselecteerde contacten:</p>
                <AvatarGroup>
                  {selectedContacts.map((contact) => (
                    <Avatar key={contact} className="border-2 border-background">
                      <AvatarFallback>{contact}</AvatarFallback>
                    </Avatar>
                  ))}
                </AvatarGroup>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Link href="/planned-runs" className="flex-1">
            <Button variant="outline" className="w-full">
              Annuleren
            </Button>
          </Link>
          <Link href="/planned-runs" className="flex-1">
            <Button className="w-full">Opslaan</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

