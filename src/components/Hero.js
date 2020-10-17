import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

// const query = graphql`
//       {
//         file(relativePath: {eq: "hero-programming.png"}) {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `
const Hero = () => {
  // const {
  //   file: {
  //     childImageSharp: {fluid}
  //     },
  //   } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>szechuan studios</h1>
            <h4>web and mobile application development</h4>
            <Link to="/contact/" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        {/*<Image fluid={fluid} className="hero-img" />*/}
      </div>
    </header>
  )
}

export default Hero
