import React, {Fragment} from "react"
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import Posts from "../components/postList"

export default function IndexPage() {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Layout>
    <main>
      <Posts />
    </main>
    </Layout>
    </>
  )
}