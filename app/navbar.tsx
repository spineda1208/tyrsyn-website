import Link from 'next/link';
import Image from 'next/image';
// import {} from '';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <HomeIcon></HomeIcon>
            <div className='flex'>
                <NavText text='Readers'></NavText>
                <NavText text='Tags'></NavText>
                <NavText text='Software'></NavText>
                <NavText text='Solutions'></NavText>
            </div>
            <NavButton text='Contact Us'></NavButton>
        </nav>
    )
}

const HomeIcon = () => {
    return (
        <Link href='/' className='nav-icon'>
            <Image src='/tyrsyn.svg' height="80" width="80" alt='logo'></Image>
        </Link>
    )
}

const NavText = ({text = 'placeholder', page = '/'}) => {
    return (
        <>
        <Link href={page} className='nav-text'>
            {text}
        </Link>
        <span className='nav-dropdown'></span>
        </>
    )
}

const NavButton = ({text = 'placeholder', page = '/'}) => {
    return (
        <Link href ={page} className='nav-button'>
            {text}
        </Link>
    )
}

const MenuOption = () => {
    return (
        <></>
    )
}

export default NavBar