import React from "react";
import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

const CustomFooter = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          {/* Logo personalizado */}
          <div className="flex items-center">
            <img
            src="./img/logoE.png" 
              alt="Custom Logo"
              className="h-10"       // Ajusta el tamaño según necesites
            />
            <span className="ml-2 text-lg font-semibold"></span>
          </div>

          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="e-science™" year={2052} />
      </div>
    </Footer>
  );
};

export default CustomFooter;

