import { useRouter } from "next/router"
import { useEffect } from "react"
import MetaTags from "../components/metatags"

const Invite = () => {
  const router = useRouter()
  const { name } = router.query

  useEffect(() => {
    if (name) {
      router.push("/")
    }
  })

  return (
    <div>
      <MetaTags />
    </div>
  )
}

export default Invite
