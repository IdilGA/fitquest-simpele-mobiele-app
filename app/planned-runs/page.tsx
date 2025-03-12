import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Plus, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AvatarGroup } from "@/components/ui/avatar-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlannedRunsPage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Geplande Runs</h1>
        </div>
        <Link href="/create-run">
          <Button variant="ghost" size="icon">
            <Plus className="h-5 w-5" />
          </Button>
        </Link>
      </header>

      <Tabs defaultValue="upcoming">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Aankomend</TabsTrigger>
          <TabsTrigger value="past">Afgelopen</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-4">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">Avond Hardloop</h3>
                  <Badge>Vandaag</Badge>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Vandaag, 18:30</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Stadspark</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>5 km, ±30 min</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Jij hebt deze run gepland</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Uitgenodigd:</p>
                    <AvatarGroup>
                      <Avatar className="border-2 border-background">
                        <AvatarFallback>JV</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarFallback>LB</AvatarFallback>
                      </Avatar>
                    </AvatarGroup>
                  </div>

                  <Button variant="outline" size="sm">
                    Bewerken
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">Weekend Run</h3>
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
                    <span>10 km, ±55 min</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Georganiseerd door Mark</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Deelnemers:</p>
                    <AvatarGroup>
                      <Avatar className="border-2 border-background">
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarFallback>JIJ</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarFallback>JV</AvatarFallback>
                      </Avatar>
                      <Avatar className="border-2 border-background">
                        <AvatarFallback>+2</AvatarFallback>
                      </Avatar>
                    </AvatarGroup>
                  </div>

                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-4">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">Ochtend Run</h3>
                  <Badge variant="outline">5 maart</Badge>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Stadspark</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>5.2 km, 28:36</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Met Joost en Lisa</span>
                  </div>
                </div>

                <Link href="/run-summary">
                  <Button variant="outline" size="sm" className="w-full">
                    Bekijk Samenvatting
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold">Avond Interval</h3>
                  <Badge variant="outline">28 feb</Badge>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Atletiekbaan</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>3.5 km, 19:25</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Met Lisa</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  Bekijk Samenvatting
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Link href="/create-run">
          <Button className="w-full">Nieuwe Hardloopsessie Plannen</Button>
        </Link>
      </div>
    </div>
  )
}

