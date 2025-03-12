import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Headphones, Volume, Music, MessageSquare } from "lucide-react"

export function AudioSettings() {
  return (
    <Card className="mb-4 border-green-600/30">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Headphones className="h-5 w-5 text-green-500" />
          Audio Instellingen
        </h2>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="volume" className="text-sm flex items-center gap-1">
                <Volume className="h-4 w-4" /> Volume
              </Label>
              <span className="text-xs text-muted-foreground">80%</span>
            </div>
            <Slider defaultValue={[80]} max={100} step={1} id="volume" />
          </div>

          <div>
            <Label className="text-sm flex items-center gap-1 mb-2">
              <Music className="h-4 w-4" /> Soundscape
            </Label>
            <RadioGroup defaultValue="forest" className="grid grid-cols-3 gap-2">
              <div>
                <RadioGroupItem value="forest" id="forest" className="peer sr-only" />
                <Label
                  htmlFor="forest"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                >
                  <span className="text-xs">Bos</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="city" id="city" className="peer sr-only" />
                <Label
                  htmlFor="city"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                >
                  <span className="text-xs">Stad</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="beach" id="beach" className="peer sr-only" />
                <Label
                  htmlFor="beach"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                >
                  <span className="text-xs">Strand</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-sm flex items-center gap-1 mb-2">
              <MessageSquare className="h-4 w-4" /> Motivatie Niveau
            </Label>
            <RadioGroup defaultValue="medium" className="grid grid-cols-3 gap-2">
              <div>
                <RadioGroupItem value="low" id="low" className="peer sr-only" />
                <Label
                  htmlFor="low"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                >
                  <span className="text-xs">Laag</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="medium" id="medium" className="peer sr-only" />
                <Label
                  htmlFor="medium"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                >
                  <span className="text-xs">Gemiddeld</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="high" id="high" className="peer sr-only" />
                <Label
                  htmlFor="high"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-green-600 [&:has([data-state=checked])]:border-green-600"
                >
                  <span className="text-xs">Hoog</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

