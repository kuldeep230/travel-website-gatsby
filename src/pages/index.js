import * as React from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Email from "../components/Email"

class IndexPage extends React.Component {
  render() {
    AOS.init()
    return (
      <Layout>
        <Seo title="Home" />
        <Hero />
        <Trips heading="Our Favorite Destination " />
        <Testimonials />
        <Stats />
        <Email />
      </Layout>
    )
  }
}

export default IndexPage
