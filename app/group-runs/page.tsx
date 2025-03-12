import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search, MapPin, Calendar, Clock, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AvatarGroup } from "@/components/ui/avatar-group"

export default function GroupRunsPage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <header className="flex items-center mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Groepsruns</h1>
      </header>

      <section className="mb-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Zoek op locatie of type" className="pl-10" />
        </div>

        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          <Badge variant="outline" className="cursor-pointer">
            Vandaag
          </Badge>
          <Badge variant="outline" className="cursor-pointer">
            Deze week
          </Badge>
          <Badge variant="outline" className="cursor-pointer">
            5K
          </Badge>
          <Badge variant="outline" className="cursor-pointer">
            10K
          </Badge>
          <Badge variant="outline" className="cursor-pointer">
            Beginners
          </Badge>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Aankomende Groepsruns</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold">Stadspark 5K</h3>
                <Badge>Vandaag</Badge>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Vandaag, 18:30</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Stadspark Ingang Noord</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Tempo: 5:30-6:00 min/km</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>8 deelnemers</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <AvatarGroup>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>JV</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>LB</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>+5</AvatarFallback>
                  </Avatar>
                </AvatarGroup>

                <Button>Deelnemen</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold">Beginners 5K Training</h3>
                <Badge>Morgen</Badge>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Morgen, 09:00</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Sportpark De Vliet</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Tempo: 6:00-7:00 min/km</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>4 deelnemers</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <AvatarGroup>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>LB</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>PV</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>KD</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                </AvatarGroup>

                <Button>Deelnemen</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold">Weekend 10K Run</h3>
                <Badge>Zaterdag</Badge>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Zaterdag, 10:00</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Bos en Duin Route</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Tempo: 5:00-5:30 min/km</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>12 deelnemers</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <AvatarGroup>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>JV</AvatarFallback>
                  </Avatar>
                  <Avatar className="border-2 border-background">
                    <AvatarFallback>+10</AvatarFallback>
                  </Avatar>
                </AvatarGroup>

                <Button>Deelnemen</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

