import { Card, CardContent, CardHeader, CardTitle } from "@/components/components/ui/card"

export default function Projects() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Here you can manage your projects.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}