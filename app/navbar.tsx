import Link from 'next/link';
import Image from 'next/image';
// import {} from '';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <HomeIcon></HomeIcon>
            <MenuTitle title='Readers' page='/readers'>
                <Image src='/tyrsyn.svg' height="80" width="80" alt='logo'></Image>
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
            <Image src='/tyrsyn.svg' height="80" width="80" alt='logo'></Image>
        </Link>
    )
}

// WIP
// const DropdownMenu = ({ children }: {children: any}) => {
//     return (
//         <>
//         <div className='nav-dropdown-block group-hover:h-28'>
//             <span className='nav-dropdown-arrow'></span>
//         </div>

//         <ul className='nav-dropdown'>
//             {children}
//         </ul>
//         </>
//     )
// }

const MenuTitle = ({children, title = 'placeholder', page = '/'}: {children: any, title: string, page: string}) => {
    return (
        <>
        <Link href={page} className='nav-menutitle group'>
            {title}
            <span className='nav-dropdown group-hover:block'>
                {children}
            </span>
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