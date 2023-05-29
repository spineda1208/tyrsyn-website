import Link from 'next/link';
import Image from 'next/image';
import {MdBarcodeReader} from 'react-icons/md';
import {} from 'react-icons/io';
import { ReactComponentElement } from 'react';
import { IconType } from 'react-icons';
// import {} from '';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <HomeIcon></HomeIcon>
            <MenuTitle title='Readers' page='/readers'>
                <div className='nav-menu-option-wrapper'>
                    <MenuOption icon={<img src="icons/handheld.svg" className='large-icon'/>}>Handhelds</MenuOption>
                    <MenuOption icon={<img src="icons/reader-antenna.svg" alt="an svg" className='large-icon'/>}>Integrated</MenuOption>
                    <MenuOption icon={<img src="icons/multi-antenna.svg" alt="an svg" className='large-icon'/>}>Multi-antenna</MenuOption>
                </div>
            </MenuTitle>
            <MenuTitle title='Tags' page='/tags'>
                <div className='nav-menu-option-wrapper'>
                    <MenuOption icon={<img src="icons/handheld.svg" className='large-icon'/>}>Labels</MenuOption>
                    <MenuOption icon={<img src="icons/reader-antenna.svg" alt="an svg" className='large-icon'/>}>Anti-Theft</MenuOption>
                    <MenuOption icon={<img src="icons/multi-antenna.svg" alt="an svg" className='large-icon'/>}>Specialty</MenuOption>
                </div>
            </MenuTitle>
            <MenuTitle title='Software' page='/software'>more content</MenuTitle>
            <MenuTitle title='Solutions' page='/solutions'>even more content</MenuTitle>
            <GradientButton text='Contact Us' page='/contactus'></GradientButton>
        </nav>
    )
}

const HomeIcon = () => {
    return (
        <Link href='/' className='nav-homeicon'>
            <Image src='logos/tyrsyn.svg' height="64" width="64" alt='logo'></Image>
        </Link>
    )
}

const MenuTitle = ({children, title = 'placeholder', page = '/'}: {children: any, title: string, page: string}) => {
    return (
        <>
        <Link href={page} className='nav-menu-title hover:text-slate-300 group'>
            {title}
            <div className='nav-bridge'></div>
            <div className='nav-dropdown-wrapper group-hover:opacity-100'>
                <span className='nav-dropdown group-hover:visible'>
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

const GradientButton = ({text = 'placeholder', page = '/'}: {text: string, page:string}) => {
    return (
        <Link href ={page} className='nav-gradientbutton'>{text}</Link>
    )
}

export default NavBar