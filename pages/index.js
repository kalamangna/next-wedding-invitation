import { useAppContext } from "../components/context"
import MetaTags from "../components/metatags"

export default function Home() {
  const { guest } = useAppContext()

  return (
    <div>
      <MetaTags />

      <main className="min-h-screen">
        <div className="container mx-auto py-4 text-center">
          <p>
            For: <span className="font-bold">{guest}</span>
          </p>
        </div>
      </main>
    </div>
  )
}
