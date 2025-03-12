import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export function RecentBuddyRuns() {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>JV</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Met Joost Verhoeven</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Gisteren</span>
                  <Clock className="h-3 w-3 ml-2" />
                  <span>5.2 km, 28:36</span>
                </div>
              </div>
            </div>
            <Badge className="bg-green-600">Voltooid</Badge>
          </div>

          <div className="flex justify-between text-xs mt-3 pt-3 border-t">
            <div className="text-center">
              <p className="text-muted-foreground">Jouw tempo</p>
              <p className="font-medium">5:30/km</p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">Buddy tempo</p>
              <p className="font-medium">5:25/km</p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">Calorieën</p>
              <p className="font-medium">342 kcal</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>LB</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Met Lisa Bakker</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>3 dagen geleden</span>
                  <Clock className="h-3 w-3 ml-2" />
                  <span>3.5 km, 19:25</span>
                </div>
              </div>
            </div>
            <Badge className="bg-green-600">Voltooid</Badge>
          </div>

          <div className="flex justify-between text-xs mt-3 pt-3 border-t">
            <div className="text-center">
              <p className="text-muted-foreground">Jouw tempo</p>
              <p className="font-medium">5:40/km</p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">Buddy tempo</p>
              <p className="font-medium">5:45/km</p>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">Calorieën</p>
              <p className="font-medium">215 kcal</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

