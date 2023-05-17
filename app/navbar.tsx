import Link from 'next/link';
import Image from 'next/image';
// import {} from '';

const NavBar = () => {
    return (
        <nav className='fixed top-0 h-16 w-screen m-0 flex flex-row bg-transparent border-2 border-green-600 shadow justify-between'>
            <HomeIcon></HomeIcon>
            {/* <div> */}
                <NavBarText text='Link 1'></NavBarText>
                <NavBarText text='Link 2'></NavBarText>
                <NavBarText text='Link 3'></NavBarText>
                <NavBarText text='Link 4'></NavBarText>
            {/* </div> */}
            <NavBarButton text='Contact Us'></NavBarButton>
        </nav>
    )
}

const HomeIcon = () => {
    return (
        <Link href='/' className='home-icon'>
            <Image src='/tyrsyn.svg' height="200" width="200" alt='logo'></Image>
        </Link>
    )
}

const NavBarText = ({text = 'placeholder', page = '/'}) => {
    return (
        <Link href={page} className='navbar-text'>
            {text}
        </Link>
    )
}

const NavBarButton = ({text = 'placeholder', page = '/'}) => {
    return (
        <Link href ={page} className='my-auto mr-4'>
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