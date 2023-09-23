import Image from "next/image";
import React from "react";

import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col mt-5 border-t border-gray-100 dark:border-gray-800">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain dark:invert"
          />
          <p className="text-base">
            CakRent {new Date().getFullYear()} <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.text} className="footer__link">
              <h3 className="font-bold">{link.text}</h3>
              {link.links.map((item) => (
                <Link key={item.text} href={item.url} className="">
                  {item.text}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 dark:border-gray-800 sm:px-16 px-6 py-10">
        <p>@{new Date().getFullYear()} CakRent. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="">
            Privacy Policy
          </Link>
          <Link href="/" className="">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
