"use client"
import Wrapper from '@/components/Shared/Wrapper'
import React from 'react';
import { Link as Scrolling } from 'react-scroll'
import Image from 'next/image';

const Plans = () => {
    return (
        <Wrapper id="Plans" style='py-16' >
            <div className='relative w-full bg-black-main flex justify-center items-start flex-col md:gap-14 gap-8 md:p-14 p-6 md:rounded-[48px] rounded-[25px]' >
                <h2 className='md:max-w-[800px] font-primary font-light md:text-[52px] text-[28px] md:leading-[62px] leading-[28px] text-white select-none' >
                    We enable easy access to modern, frictionless software development.
                </h2>
                <Scrolling
                    activeClass="active"
                    to={"MemberShips"}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    duration={500}
                    className='md:px-14 px-6 md:py-3.5 py-2 rounded-[12px] bg-brand-secondary font-primary font-semibold text-white cursor-pointer mb-32'
                >
                    See plans
                </Scrolling>

                {/* Vector art */}
                <div className='absolute -bottom-1 -right-1 md:w-[250px] w-[150px] md:h-[360px] h-[200px] pointer-events-none' >
                    <Image alt='' src={"/Plans/art.png"} fill sizes='' className='object-cover' />
                </div>
            </div>
        </Wrapper>
    )
}

export default Plans