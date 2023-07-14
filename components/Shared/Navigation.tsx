"use client";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Static from "@/constant/Static.json";
import { Link as Scrolling } from "react-scroll";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { Fragment, useState } from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <Fragment>
      <Wrapper id="Navigation">
        <div className="w-full h-[62px] flex justify-between items-center">
          {/* Logo */}
          <div className="relative md:w-[200px] w-[120px] md:h-[57px] h-[27.79px]">
            <Image
              src={"/logoWhite.png"}
              alt=""
              fill
              sizes=""
              priority
              className="object-contain"
            />
          </div>

          {/* Menu */}
          <div className="md:flex hidden justify-center items-center gap-10">
            {Static?.NavItems?.map((item: any, index: number) => {
              return (
                <Scrolling
                  key={index}
                  activeClass="active"
                  to={item.To}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={1000}
                  className="font-primary font-medium text-[16px] text-black-off hover:text-[#ED5232] transition-all duration-300 cursor-pointer"
                >
                  {item.name}
                </Scrolling>
              );
            })}
            <Link
              href={"https://everdev.gitbook.io/everdev/"}
              className="font-primary font-medium text-[16px] text-black-off hover:text-[#ED5232] transition-all duration-300 cursor-pointer"
            >
              Docs
            </Link>
            <Link
              href={"https://billing.stripe.com/p/login/aEU7vR60C5NdbE48ww"}
              className="font-primary font-medium text-[16px] text-black-off hover:text-[#ED5232] transition-all duration-300 cursor-pointer"
            >
              Login
            </Link>
            <Scrolling
              activeClass="active"
              to={"MemberShips"}
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              className="bg-black-off font-primary text-[16px] leading-[28px] text-white rounded-[12px] px-7 py-2.5 transition-all duration-300 hover:bg-[#ED5232] hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              See Plans
            </Scrolling>
          </div>

          {/* Hamburger */}
          <BiMenuAltRight
            onClick={toggleDrawer}
            className="text-black-off md:hidden block text-[28px] cursor-pointer"
          />
        </div>
      </Wrapper>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{
          width: "100%",
        }}
      >
        <section className="w-full h-full px-4 py-5">
          <div className="w-full flex justify-between item-center">
            <Image
              src={"/logoWhite.png"}
              alt=""
              width={120}
              height={27.79}
              priority
              className="object-contain"
            />
            <CgClose
              onClick={toggleDrawer}
              className="text-black-off text-[26px] cursor-pointer"
            />
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-6 mt-8">
            {Static?.NavItems?.map((item: any, index: number) => {
              return (
                <Scrolling
                  onClick={toggleDrawer}
                  key={index}
                  activeClass="active"
                  to={item.To}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={1000}
                  className="font-primary font-medium text-[30px] text-black-off hover:text-[#ED5232] transition-all duration-300 cursor-pointer"
                >
                  {item.name}
                </Scrolling>
              );
            })}
            <Link
              href={"https://everdev.gitbook.io/everdev/"}
              className="font-primary font-medium text-[30px] text-black-off hover:text-[#ED5232] transition-all duration-300 cursor-pointer"
            >
              Docs
            </Link>
            <Link
              href={"https://billing.stripe.com/p/login/aEU7vR60C5NdbE48ww"}
              className="font-primary font-medium text-[30px] text-black-off hover:text-[#ED5232] transition-all duration-300 cursor-pointer"
            >
              Login
            </Link>
            <Scrolling
              onClick={toggleDrawer}
              activeClass="active"
              to={"MemberShips"}
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              className="bg-black-off font-primary text-[16px] leading-[28px] text-white rounded-[12px] px-7 py-2.5 transition-all duration-300 hover:bg-[#ED5232] hover:shadow-lg whitespace-nowrap cursor-pointer"
            >
              See Plans
            </Scrolling>
          </div>
        </section>
      </Drawer>
    </Fragment>
  );
};

export default Navigation;
