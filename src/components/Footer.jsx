import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Explorix</h1>
          <p>We strive to create the best experience for our customer</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="">Description</FooterLink>
          <FooterLink to="">Sponsership</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/about">Submit Video</FooterLink>
          <FooterLink to="/">Ambassadors</FooterLink>
          <FooterLink to="">Agency</FooterLink>
          <FooterLink to="">Influencer</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/about">Instagram</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="">Youtube</FooterLink>
          <FooterLink to="">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`

const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a3e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1frs;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLink = styled.div`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;
  cursor: pointer;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
const FooterLinkTitle = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`
