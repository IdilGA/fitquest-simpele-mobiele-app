import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, User, Bell, Headphones, Globe, Shield } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"

export default function SettingsPage() {
  return (
    <div className="container max-w-md mx-auto px-4 py-8">
      <header className="flex items-center mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Instellingen</h1>
      </header>

      <section className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <User className="h-5 w-5 text-green-600" />
              <h2 className="text-lg font-semibold">Profiel</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm">Persoonlijke gegevens</p>
                <Button variant="ghost" size="sm">
                  Bewerken
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Hardloopvoorkeuren</p>
                <Button variant="ghost" size="sm">
                  Bewerken
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Verbonden apparaten</p>
                <Button variant="ghost" size="sm">
                  Beheren
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="h-5 w-5 text-green-600" />
              <h2 className="text-lg font-semibold">Notificaties</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm">Buddy uitnodigingen</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Buddy run updates</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Prestatie meldingen</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm">Berichten</p>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Headphones className="h-5 w-5 text-green-600" />
              <h2 className="text-lg font-semibold">Audio</h2>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm">Hoofdvolume</p>
                  <span className="text-xs text-muted-foreground">80%</span>
                </div>
                <Slider defaultValue={[80]} max={100} step={1} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <p className="text-sm">Motiverende geluiden</p>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm">Tempo feedback</p>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm">Buddy updates</p>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm">Spatial audio</p>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm">Dynamische soundscapes</p>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-5 w-5 text-green-600" />
              <h2 className="text-lg font-semibold">Algemeen</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm">Donkere modus</p>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm">Eenheden (Metrisch/Imperiaal)</p>
                <Button variant="ghost" size="sm">
                  Metrisch
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm">Taal</p>
                <Button variant="ghost" size="sm">
                  Nederlands
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-green-600" />
              <h2 className="text-lg font-semibold">Privacy & Beveiliging</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm">Locatie delen met buddies</p>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm">Statistieken delen</p>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm">Wachtwoord wijzigen</p>
                <Button variant="ghost" size="sm">
                  Wijzigen
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm">Privacybeleid</p>
                <Button variant="ghost" size="sm">
                  Bekijken
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="pt-4">
          <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
            Uitloggen
          </Button>
        </div>
      </section>
    </div>
  )
}

