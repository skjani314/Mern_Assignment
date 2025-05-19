import { Card, CardContent, CardHeader, CardTitle } from "@/components/components/ui/card"

export default function Settings() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Adjust your application settings here.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}