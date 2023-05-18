import Link from 'next/link';
import Image from 'next/image';
// import {} from '';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <HomeIcon></HomeIcon>
            <div className='flex'>
                <NavText text='Link 1'></NavText>
                <NavText text='Link 2'></NavText>
                <NavText text='Link 3'></NavText>
                <NavText text='Link 4'></NavText>
            </div>
            <NavButton text='Contact Us'></NavButton>
        </nav>
    )
}

const HomeIcon = () => {
    return (
        <Link href='/' className='nav-icon'>
            <Image src='/tyrsyn.svg' height="200" width="200" alt='logo'></Image>
        </Link>
    )
}

const NavText = ({text = 'placeholder', page = '/'}) => {
    return (
        <Link href={page} className='nav-text'>
            {text}
        </Link>
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