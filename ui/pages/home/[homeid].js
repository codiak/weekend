import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter()
  const { homeid } = router.query

  return <p>Home Id: {homeid}</p>
}

export default HomePage
