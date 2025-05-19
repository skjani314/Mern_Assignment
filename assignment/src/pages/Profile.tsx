import { Card, CardContent, CardHeader, CardTitle } from "@/components/components/ui/card"

export default function Profile() {
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            View and edit your profile information here.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}