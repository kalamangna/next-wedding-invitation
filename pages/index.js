import Head from "next/head"

export default function Home() {
  const to = "test"

  return (
    <div>
      <Head>
        <title>Aci & Dzul Wedding</title>
        <meta
          name="description"
          content="Wedding Invitation using Next and Tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <div className="container mx-auto py-4 text-center">
          <p>
            To: <span className="font-bold">{to}</span>
          </p>
        </div>
      </main>
    </div>
  )
}
