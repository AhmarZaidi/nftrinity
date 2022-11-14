import type { NextPage } from "next"
import BaseLayout from "../components/layout/BaseLayout"


const Home : NextPage = () => {
  return (
    <BaseLayout>
      <div className="underline">
        hello
      </div>
    </BaseLayout>
  )
}

export default Home