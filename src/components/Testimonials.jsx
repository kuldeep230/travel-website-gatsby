import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)| (png)| (jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: TRACED_SVG
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <TestimonialsContainer>
        <TopLine>Testimonials</TopLine>
        <Description>What people are saying</Description>
        <ContentWrapper>
          <ColumnOne
            data-aos="fade-right"
            data-aos-offset="120"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <Testimonial>
              <IoMdCheckmarkCircleOutline
                css={`
                  color: #3fffa8;
                  font-size: 2rem;
                  margin-bottom: 1rem;
                `}
              />
              <h3>Sean Michael</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                iste praesentium accusantium cumque veniam corrupti hic,
                molestiae optio eaque incidunt. Cupiditate incidunt illum
                aliquid numquam ratione dignissimos accusantium, quo esse eius
                temporibus amet minus totam modi velit sed laboriosam tenetur?
              </p>
            </Testimonial>
            <Testimonial>
              <FaRegLightbulb
                css={`
                  color: #f9b19b;
                  font-size: 2rem;
                  margin-bottom: 1rem;
                `}
              />
              <h3>Sarah Queen</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                iste praesentium accusantium cumque veniam corrupti hic,
                molestiae optio eaque incidunt. Cupiditate incidunt illum
                aliquid numquam ratione dignissimos accusantium, quo esse eius
                temporibus amet minus totam modi velit sed laboriosam tenetur?
              </p>
            </Testimonial>
          </ColumnOne>
          <ColumnTwo
            data-aos="fade-left"
            data-aos-offset="120"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            {data.allFile.edges.map((image, key) => (
              <Image
                key={key}
                image={image.node.childImageSharp.gatsbyImageData}
              />
            ))}
          </ColumnTwo>
        </ContentWrapper>
      </TestimonialsContainer>
    </div>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: gird;
  grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const Image = styled(GatsbyImage)`
  border-radius: 10px;
  height: 100%;
`
