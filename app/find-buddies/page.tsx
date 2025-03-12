import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search, Clock, Award } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function FindBuddiesPage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <header className="flex items-center mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Vind Hardloopmaatjes</h1>
      </header>

      <section className="mb-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Zoek op naam of locatie" className="pl-10" />
        </div>

        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          <Badge variant="outline" className="cursor-pointer">
            Dichtbij
          </Badge>
          <Badge variant="outline" className="cursor-pointer">
            Vergelijkbaar tempo
          </Badge>
          <Badge variant="outline" className="cursor-pointer">
            Beschikbaar nu
          </Badge>
          <Badge variant="outline" className="cursor-pointer">
            Beginners
          </Badge>
          <Badge variant="outline" className="cursor-pointer">
            Gevorderden
          </Badge>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">Aanbevolen Hardloopmaatjes</h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback>JV</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Joost Verhoeven</h3>
                    <Badge>1.2 km</Badge>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <Clock className="h-3 w-3" />
                    <span>Meestal actief om 18:00</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <Award className="h-3 w-3" />
                    <span>5:20/km gemiddeld tempo</span>
                  </div>

                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      5K
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      10K
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Interval
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="outline" size="sm">
                  Profiel
                </Button>
                <Button size="sm">Uitnodigen</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback>LB</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Lisa Bakker</h3>
                    <Badge>2.3 km</Badge>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <Clock className="h-3 w-3" />
                    <span>Meestal actief in het weekend</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <Award className="h-3 w-3" />
                    <span>5:40/km gemiddeld tempo</span>
                  </div>

                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      5K
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Trail
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Beginners
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="outline" size="sm">
                  Profiel
                </Button>
                <Button size="sm">Uitnodigen</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">Mark Koning</h3>
                    <Badge>3.5 km</Badge>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                    <Clock className="h-3 w-3" />
                    <span>Meestal actief in de ochtend</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <Award className="h-3 w-3" />
                    <span>5:10/km gemiddeld tempo</span>
                  </div>

                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      10K
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Halve marathon
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Gevorderd
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="outline" size="sm">
                  Profiel
                </Button>
                <Button size="sm">Uitnodigen</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

