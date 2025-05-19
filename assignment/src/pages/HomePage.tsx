import { Card, CardContent, CardHeader, CardTitle } from "@/components/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This is your homepage. Enjoy exploring your dashboard!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}