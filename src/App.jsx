import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>S^2 + B^2</CardTitle>
        <CardDescription>Sustainability Squared, Behavior Balanced</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Connecting innovators with investors</p>
      </CardContent>
      <CardFooter>
        <h1>For tomorrow's cause</h1>
      </CardFooter>
    </Card>
  )
}

export default App

