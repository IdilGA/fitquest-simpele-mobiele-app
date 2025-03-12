import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function StatsOverview() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Jouw Statistieken</h2>
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-3 gap-2 text-center mb-4">
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-muted-foreground">Runs</p>
            </div>
            <div>
              <p className="text-2xl font-bold">42km</p>
              <p className="text-xs text-muted-foreground">Totaal</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5:30</p>
              <p className="text-xs text-muted-foreground">Gem. Tempo</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Wekelijks doel</span>
                <span className="font-medium">15 km / 25 km</span>
              </div>
              <Progress value={60} className="h-2 bg-green-200" indicatorClassName="bg-green-600" />
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Buddy runs</span>
                <span className="font-medium">8 / 10 runs</span>
              </div>
              <Progress value={80} className="h-2 bg-green-200" indicatorClassName="bg-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

