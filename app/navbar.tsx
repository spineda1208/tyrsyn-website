/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
// import {} from '';

const NavBar = () => {
    return (
        <nav className='navbar' aria-label='Primary'>
            <HomeIcon/>
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

const GradientButton = (props: {text: string, page:string}) => {
    return (
        <Link href ={props.page} className='nav-gradientbutton'>{props.text}</Link>
    )
}

export default NavBar