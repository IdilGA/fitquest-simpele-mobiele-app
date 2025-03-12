import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Share2, Trophy, Clock, Route, Flame, Heart, BarChart } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RunSummaryPage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Run Samenvatting</h1>
        </div>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
      </header>

      <section className="mb-6">
        <Card className="mb-4">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold">Buddy Run</h2>
                <p className="text-sm text-muted-foreground">11 maart 2025, 14:30</p>
              </div>
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-green-600/5 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Route className="h-4 w-4 text-green-600" />
                  <p className="text-sm text-muted-foreground">Afstand</p>
                </div>
                <p className="text-2xl font-bold">5.2 km</p>
              </div>

              <div className="bg-green-600/5 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="h-4 w-4 text-green-600" />
                  <p className="text-sm text-muted-foreground">Tijd</p>
                </div>
                <p className="text-2xl font-bold">28:36</p>
              </div>

              <div className="bg-green-600/5 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart className="h-4 w-4 text-green-600" />
                  <p className="text-sm text-muted-foreground">Gem. Tempo</p>
                </div>
                <p className="text-2xl font-bold">5:30/km</p>
              </div>

              <div className="bg-green-600/5 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Flame className="h-4 w-4 text-green-600" />
                  <p className="text-sm text-muted-foreground">Calorieën</p>
                </div>
                <p className="text-2xl font-bold">342</p>
              </div>
            </div>

            <div className="bg-green-600/5 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Heart className="h-4 w-4 text-green-600" />
                <p className="text-sm text-muted-foreground">Hartslag</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold">148 bpm</p>
                <p className="text-sm text-muted-foreground">Max: 165 bpm</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="stats">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stats">Statistieken</TabsTrigger>
            <TabsTrigger value="buddy">Buddy</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
          </TabsList>

          <TabsContent value="stats" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Tempo Analyse</h3>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kilometer 1</span>
                      <span className="font-medium">5:25/km</span>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kilometer 2</span>
                      <span className="font-medium">5:40/km</span>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kilometer 3</span>
                      <span className="font-medium">5:35/km</span>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: "87%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kilometer 4</span>
                      <span className="font-medium">5:20/km</span>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kilometer 5</span>
                      <span className="font-medium">5:15/km</span>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Laatste 0.2 km</span>
                      <span className="font-medium">5:05/km</span>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: "105%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="buddy" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Buddy Vergelijking</h3>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>JV</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Joost Verhoeven</p>
                      <div className="flex items-center gap-1">
                        <Badge variant="outline" className="text-xs py-0">
                          5.2 km
                        </Badge>
                        <Badge variant="outline" className="text-xs py-0">
                          27:50
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-600">Sneller</Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tempo</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">5:20/km</span>
                        <span className="text-xs text-green-600">(+10s sneller)</span>
                      </div>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Hartslag</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">152 bpm</span>
                        <span className="text-xs text-green-600">(+4 hoger)</span>
                      </div>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Calorieën</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium">356 kcal</span>
                        <span className="text-xs text-green-600">(+14 meer)</span>
                      </div>
                    </div>
                    <div className="h-2 bg-green-200 rounded-full">
                      <div className="h-2 bg-green-600 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-2">Buddy Notities</h4>
                  <p className="text-sm text-muted-foreground">
                    "Goede run samen! Je hield een constant tempo aan. Volgende keer proberen we 10K?"
                  </p>
                </div>

                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    Stuur Bedankje
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="audio" className="mt-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Audio Begeleiding</h3>

                <div className="space-y-3">
                  <div className="bg-green-600/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">Start van de run</p>
                    <p className="text-xs text-muted-foreground">
                      "Welkom bij je buddy run met Joost. Jullie gaan vandaag 5 kilometer lopen. Veel succes!"
                    </p>
                  </div>

                  <div className="bg-green-600/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">1 km bereikt</p>
                    <p className="text-xs text-muted-foreground">
                      "Je hebt 1 kilometer afgelegd in 5:25. Goed tempo! Joost loopt 50 meter voor je."
                    </p>
                  </div>

                  <div className="bg-green-600/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">Halverwege</p>
                    <p className="text-xs text-muted-foreground">
                      "Je bent halverwege! Je tempo is stabiel. Joost heeft net zijn tempo verhoogd."
                    </p>
                  </div>

                  <div className="bg-green-600/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">Laatste kilometer</p>
                    <p className="text-xs text-muted-foreground">
                      "Nog 1 kilometer te gaan. Je loopt nu sneller dan je gemiddelde. Joost is 200m voor je."
                    </p>
                  </div>

                  <div className="bg-green-600/5 p-3 rounded-lg">
                    <p className="text-sm font-medium">Finish</p>
                    <p className="text-xs text-muted-foreground">
                      "Gefeliciteerd! Je hebt 5.2 km afgelegd in 28:36. Joost was 46 seconden sneller."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <div className="flex gap-4">
        <Button variant="outline" className="flex-1">
          Deel Resultaten
        </Button>
        <Link href="/" className="flex-1">
          <Button className="w-full bg-green-600 hover:bg-green-700">Terug naar Home</Button>
        </Link>
      </div>
    </div>
  )
}

