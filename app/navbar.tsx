"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {GiHamburgerMenu} from 'react-icons/gi';

const NavBar = () => {

    const navRef = useRef<HTMLElement>(null);

    const navToggle = () => {
        // navRef.current.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded'. true) : console.log('false')
        if (navRef.current) {
            navRef.current.toggleAttribute('data-visible')
        };
    };

    return (
        <header className='navbar'>
            <HomeIcon/>
            <button className="nav-toggle" aria-controls='navbar-titles' onClick={navToggle}>
                <GiHamburgerMenu size="35"/>
                <span className='visually-hidden'>Menu</span>
            </button>
            <nav className='navbar-titles' id='navbar-titles' aria-label='Primary' ref={navRef}>
                <MenuTitle title='Readers' page='/readers'>
                    <div className='nav-menu-option-wrapper'>
                        <MenuOption icon={<img src="icons/handheld.svg" alt="handheld RFID reader icon" className='large-icon'/>}>Handhelds</MenuOption>
                        <MenuOption icon={<img src="icons/reader-antenna.svg" alt="integrated RFID antenna reader icon" className='large-icon'/>}>Integrated</MenuOption>
                        <MenuOption icon={<img src="icons/multi-antenna.svg" alt="RFID multi-antenna reader icon" className='large-icon'/>}>Multi-antenna</MenuOption>
                    </div>
                </MenuTitle>
                <MenuTitle title='Tags' page='/tags'>
                    <div className='nav-menu-option-wrapper'>
                        <MenuOption icon={<img src="icons/label.svg" alt="RFID label icon" className='large-icon'/>}>Labels</MenuOption>
                        <MenuOption icon={<img src="icons/anti-theft.svg" alt="lock icon" className='large-icon'/>}>Anti-Theft</MenuOption>
                        <MenuOption icon={<img src="icons/specialty-tag.svg" alt="specialty icon" className='large-icon'/>}>Specialty</MenuOption>
                    </div>
                </MenuTitle>
                <MenuTitle title='Software' page='/software'>Offerings</MenuTitle>
                <MenuTitle title='Solutions' page='/solutions'>Placeholder</MenuTitle>
                <GradientButton text='Contact Us' page='/contactus'/>
            </nav>
        </header>
    )
}

export const HomeIcon = () => {
    return (
        <Link href='/' className='nav-homeicon'>
            <Image src='logos/tyrsyn.svg' height="64" width="64" alt='logo'></Image>
        </Link>
    )
}

const MenuTitle = ({children, title = 'placeholder', page = '/'}: {children: any, title: string, page: string}) => {
    return (
        <>
        <Link href={page} className='nav-menu-title hover:text-slate-400 group'>
            {title}
            <div className='nav-bridge'></div>
            <div className='nav-dropdown-wrapper group-hover:opacity-100'>
                <span className='nav-dropdown group-hover:md:visible'>
                    {children}
                </span>
            </div>
        </Link>
        </>
    )
}

const MenuOption = ({children, icon}:{children: string, icon: any}) =>{
    return (
        <div className='nav-menu-option group hover:text-slate-500'>
            { children }
            <div className='large-icon-wrapper group-hover:fill-slate-500'>
                { icon }
            </div>
        </div>
    )
}

const GradientButton = (props: {text: string, page:string}) => {
    return (
        <Link href ={props.page} className='nav-gradientbutton'>{props.text}</Link>
    )
}

export default NavBar