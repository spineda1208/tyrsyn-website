import Link from 'next/link';
import Image from 'next/image';
// import {} from '';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <HomeIcon></HomeIcon>
            <DropdownMenu>
                <MenuTitle title='Readers' page='/readers'>hello world!</MenuTitle>
                <MenuTitle title='Tags' page='/tags'>bro</MenuTitle>
                <MenuTitle title='Software' page='/software'>stop</MenuTitle>
                <MenuTitle title='Solutions' page='/solutions'>playing</MenuTitle>
            </DropdownMenu>
            <GradButton text='Contact Us' page='/contactus'></GradButton>
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

const DropdownMenu = ({ children }: {children: any}) => {
    return (
        <>
        <div>
            <span className='absolute w-20px h-20px block bg-white -translate-y-1/2 rotate-45'></span>
        </div>
        <ul className='flex'>
            {children}
        </ul>
        </>
    )
}

const MenuTitle = ({children, title = 'placeholder', page = '/'}: {children: any, title: string, page: string}) => {
    return (
        <>
        <Link href={page} className='nav-menutitle group'>{title}</Link>
        <span className='nav-dropdown group-hover:block:opacity-100'>
            {children}
        </span>
        </>
    )
}

const GradButton = ({text = 'placeholder', page = '/'}: {text: string, page:string}) => {
    return (
        <Link href ={page} className='nav-gradbutton'>
            {text}
        </Link>
    )
}



export default NavBar