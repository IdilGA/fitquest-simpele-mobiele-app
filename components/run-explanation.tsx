"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, MapPin, Phone, Volume2, Users } from "lucide-react"

interface RunExplanationProps {
  onClose: () => void
}

export function RunExplanation({ onClose }: RunExplanationProps) {
  return (
    <Card className="mb-6 border-green-600 bg-green-50/50 dark:bg-green-950/10">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-lg font-semibold text-green-700 dark:text-green-500">Hoe werkt een Buddy Run?</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="mt-0.5">
              <MapPin className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-green-700 dark:text-green-500">Live Locatie Tracking</p>
              <p className="text-sm text-muted-foreground">
                Zie waar je buddy zich bevindt op de kaart. De afstand tussen jullie wordt real-time bijgewerkt.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mt-0.5">
              <Phone className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-green-700 dark:text-green-500">Live Gesprek</p>
              <p className="text-sm text-muted-foreground">
                Praat met je buddy tijdens het hardlopen via de ingebouwde spraakverbinding. Je kunt je microfoon dempen
                indien nodig.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mt-0.5">
              <Volume2 className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-green-700 dark:text-green-500">Audio Begeleiding</p>
              <p className="text-sm text-muted-foreground">
                Ontvang motiverende berichten en updates over je buddy's voortgang. Het systeem past zich aan op basis
                van jullie tempo's.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mt-0.5">
              <Users className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-green-700 dark:text-green-500">Buddy Status</p>
              <p className="text-sm text-muted-foreground">
                Bekijk real-time statistieken van je buddy, zoals tempo, afstand en relatieve positie ten opzichte van
                jou.
              </p>
            </div>
          </div>
        </div>

        <Button className="w-full mt-4 bg-green-600 hover:bg-green-700" onClick={onClose}>
          Begrepen, laten we rennen!
        </Button>
      </CardContent>
    </Card>
  )
}

