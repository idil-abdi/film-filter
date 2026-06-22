import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

function FooterContainer() {
  return (
    <>
     <Footer container>
      <FooterCopyright href="#" by="Film Filter" year={2026} />
      <FooterLinkGroup>
        <FooterLink href="#">Home</FooterLink>
        <FooterLink href="#">Movies</FooterLink>
      </FooterLinkGroup>
    </Footer>
    </>
  )
}

export default FooterContainer