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
                    <MenuOption icon={<MdBarcodeReader size="80" />}>Handhelds</MenuOption>
                    <MenuOption icon={<MdBarcodeReader />}>Integrated Readers</MenuOption>
                    <MenuOption icon={<MdBarcodeReader />}>Multi-antenna</MenuOption>
                </div>
            </MenuTitle>
            <MenuTitle title='Tags' page='/tags'>content</MenuTitle>
            <MenuTitle title='Software' page='/software'>more content</MenuTitle>
            <MenuTitle title='Solutions' page='/solutions'>even more content</MenuTitle>
            <GradientButton text='Contact Us' page='/contactus'></GradientButton>
        </nav>
    )
}

const HomeIcon = () => {
    return (
        <Link href='/' className='nav-homeicon'>
            <Image src='logos/tyrsyn.svg' height="80" width="80" alt='logo'></Image>
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
        <div className='nav-menu-option group'>
            { children }
            <div className='large-icon group-hover:'>
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