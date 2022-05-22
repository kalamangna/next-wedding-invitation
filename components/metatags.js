import Head from "next/head"

const MetaTags = () => {
  return (
    <Head>
      <title>AciDzul Wedding</title>

      <meta
        name="description"
        content="Wedding Invitation with Next and Tailwind"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://acidzulwedding.vercel.app/" />
      <meta property="og:title" content="AciDzul Wedding" />
      <meta
        property="og:description"
        content="Wedding Invitation using Next and Tailwind"
      />
      <meta property="og:image" content="/vercel.svg" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default MetaTags
