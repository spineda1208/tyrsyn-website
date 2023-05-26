import Link from 'next/link';
import Image from 'next/image';
import {MdBarcodeReader} from 'react-icons/md';
import {} from 'react-icons/io';
// import {} from '';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <HomeIcon></HomeIcon>
            <MenuTitle title='Readers' page='/readers'>
                <div className='grid grid-cols-3 w-44'>
                    {/* <Image src='/tyrsyn.svg' height="200" width="200" alt='logo'></Image> */}
                    <MdBarcodeReader></MdBarcodeReader>


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
        <Link href={page} className='nav-menutitle hover:text-slate-400 group'>
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

const GradientButton = ({text = 'placeholder', page = '/'}: {text: string, page:string}) => {
    return (
        <Link href ={page} className='nav-gradientbutton'>{text}</Link>
    )
}

export default NavBar