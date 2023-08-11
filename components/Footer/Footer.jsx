import { footerLinks } from "@constants";
import Image from "next/image";

import Link from "next/link";

const FooterColumn = ({ title, links, href }) => (
  <div className="text-primary font-satoshi">
    <h4 className="font-bold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="w-full h-fit flex flex-col items-center justify-center max-sm:p-4 sm:mt-[4rem]">
      <div className="container mx-auto">
        {/* Header Footer */}
        <div className="w-full flex flex-col gap-12">
          <div className="flex items-center justify-start text-primary">
            <Image
              src="/assets/images/Logo_KabBekasi.png"
              width={950}
              height={950}
              alt="NK Logo"
              className="h-[50px] w-[60px] object-contain hidden sm:block"
            />
            <p className="text-start text-xl md:text-2xl text-primary-blue text-md font-satoshi font-medium max-w-md">
              <span className="font-semibold font-clashDisplay">
                Nakula Kresna
              </span>{" "}
              Platform informasi dan publikasi untuk masyarakat kami.
            </p>
          </div>
          <div className="flex flex-wrap gap-12">
            <div className="flex-1 flex flex-col gap-4">
              <FooterColumn
                title={footerLinks[2].title}
                links={footerLinks[2].links}
              />
              <FooterColumn
                title={footerLinks[3].title}
                links={footerLinks[3].links}
              />
            </div>
            <FooterColumn
              title={footerLinks[0].title}
              links={footerLinks[0].links}
            />
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
          </div>
        </div>
        {/* Copyright Footer */}
        <div className="w-full flex max-sm:flex-col justify-between items-center max-sm:mt-6">
          <p className="text-primary/70">
            @2023 Nakula Kresna. All rights reserved.
          </p>
          <p className="text-light">
            <span className="text-[#ffffff] font-semibold">248&nbsp;</span>
            Peoples in Nakula Kresna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
