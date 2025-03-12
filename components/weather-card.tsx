import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Sun } from "lucide-react"

export function WeatherCard() {
  return (
    <Card className="bg-gradient-to-r from-green-600/10 to-green-500/5 border-none mb-6">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-1">Goedemorgen!</h2>
            <p className="text-sm text-muted-foreground">Perfect weer om te hardlopen vandaag</p>
          </div>
          <div className="text-right flex items-center gap-2">
            <div className="bg-green-500/10 p-2 rounded-full">
              <Sun className="h-6 w-6 text-yellow-500" />
              <Cloud className="h-4 w-4 text-gray-400 -mt-3 ml-3" />
            </div>
            <div>
              <p className="text-2xl font-bold">18°C</p>
              <p className="text-xs text-muted-foreground">Licht bewolkt</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

