import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search, UserPlus, MessageSquare, Calendar, Clock, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BuddiesPage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Mijn Buddies</h1>
        </div>
        <Button variant="ghost" size="icon">
          <UserPlus className="h-5 w-5" />
        </Button>
      </header>

      <section className="mb-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Zoek buddies" className="pl-10" />
        </div>
      </section>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">Alle</TabsTrigger>
          <TabsTrigger value="favorites">Favorieten</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>JV</AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    </div>
                    <div>
                      <p className="font-medium">Joost Verhoeven</p>
                      <p className="text-xs text-muted-foreground">Vriend</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-muted-foreground mb-1">Laatste buddy run</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">Gisteren</span>
                    <Clock className="h-3 w-3 text-muted-foreground ml-2" />
                    <span className="text-xs">5.2 km, 28:36</span>
                  </div>
                </div>

                <div className="flex justify-between mt-3">
                  <Button variant="outline" size="sm">
                    Profiel
                  </Button>
                  <Link href="/start-run">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Uitnodigen
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>LB</AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    </div>
                    <div>
                      <p className="font-medium">Lisa Bakker</p>
                      <p className="text-xs text-muted-foreground">Collega</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-muted-foreground mb-1">Laatste buddy run</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">3 dagen geleden</span>
                    <Clock className="h-3 w-3 text-muted-foreground ml-2" />
                    <span className="text-xs">3.5 km, 19:25</span>
                  </div>
                </div>

                <div className="flex justify-between mt-3">
                  <Button variant="outline" size="sm">
                    Profiel
                  </Button>
                  <Link href="/start-run">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Uitnodigen
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-300 rounded-full border-2 border-background"></span>
                    </div>
                    <div>
                      <p className="font-medium">Mark Koning</p>
                      <p className="text-xs text-muted-foreground">Hardloopclub</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-muted-foreground mb-1">Laatste buddy run</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs">1 week geleden</span>
                    <Clock className="h-3 w-3 text-muted-foreground ml-2" />
                    <span className="text-xs">10 km, 52:15</span>
                  </div>
                </div>

                <div className="flex justify-between mt-3">
                  <Button variant="outline" size="sm">
                    Profiel
                  </Button>
                  <Link href="/start-run">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Uitnodigen
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="mt-4">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>JV</AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    </div>
                    <div>
                      <p className="font-medium">Joost Verhoeven</p>
                      <p className="text-xs text-muted-foreground">Vriend</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Link href="/start-run">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Uitnodigen
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recent" className="mt-4">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>JV</AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    </div>
                    <div>
                      <p className="font-medium">Joost Verhoeven</p>
                      <p className="text-xs text-muted-foreground">Vriend</p>
                    </div>
                  </div>
                  <Link href="/start-run">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Uitnodigen
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>LB</AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                    </div>
                    <div>
                      <p className="font-medium">Lisa Bakker</p>
                      <p className="text-xs text-muted-foreground">Collega</p>
                    </div>
                  </div>
                  <Link href="/start-run">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Uitnodigen
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-6">
        <Button className="w-full bg-green-600 hover:bg-green-700">Nieuwe Buddy Toevoegen</Button>
      </div>
    </div>
  )
}

