import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, History, Settings, MapPin } from "lucide-react"
import { RecentBuddyRuns } from "@/components/recent-buddy-runs"
import { WeatherCard } from "@/components/weather-card"
import { StatsOverview } from "@/components/stats-overview"

export default function HomePage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">FitQuest</h1>
        <p className="text-muted-foreground">Samen hardlopen, samen motiveren</p>
      </header>

      <WeatherCard />

      <section className="mb-8">
        <Link href="/start-run">
          <Button className="w-full py-6 text-lg mb-4 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700">
            Start Buddy Run <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Snelle Navigatie</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/buddies">
            <Card className="h-full hover:bg-accent/10 transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <Users className="h-8 w-8 mb-2 text-green-500" />
                <h3 className="font-medium">Mijn Buddies</h3>
                <p className="text-xs text-muted-foreground">Beheer je hardloopmaatjes</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/history">
            <Card className="h-full hover:bg-accent/10 transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <History className="h-8 w-8 mb-2 text-green-500" />
                <h3 className="font-medium">Geschiedenis</h3>
                <p className="text-xs text-muted-foreground">Bekijk je eerdere runs</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/settings">
            <Card className="h-full hover:bg-accent/10 transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <Settings className="h-8 w-8 mb-2 text-green-500" />
                <h3 className="font-medium">Instellingen</h3>
                <p className="text-xs text-muted-foreground">Pas je voorkeuren aan</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/locations">
            <Card className="h-full hover:bg-accent/10 transition-colors">
              <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                <MapPin className="h-8 w-8 mb-2 text-green-500" />
                <h3 className="font-medium">Locaties</h3>
                <p className="text-xs text-muted-foreground">Ontdek hardlooproutes</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <StatsOverview />

      <section>
        <h2 className="text-xl font-bold mb-4">Recente Buddy Runs</h2>
        <RecentBuddyRuns />
      </section>
    </div>
  )
}

