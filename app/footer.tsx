import Link from 'next/link'
import Image from 'next/image'
import HomeIcon from './navbar'

const PageFooter = () => {
    return (
        <footer>
            <div>
                <Image src="logos/tyrsyn-white.svg" width="100" height="100" alt='White Logo'></Image>
                <ul aria-label='Social links' role='list'>
                    <li><a href="#" aria-label='facebook'></a></li>
                    <li><a href="#" aria-label='instagram'></a></li>
                    <li><a href="#" aria-label='linkedin'></a></li>
                    <li><a href="#" aria-label='twitter'></a></li>
                </ul>
            </div>
            <div>
                <nav className='footer-nav'>
                    <ul aria-label='Footer' role='list'>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/readers'>Readers</Link></li>
                        <li><Link href='/tags'>Tags</Link></li>
                        <li><Link href='/software'>Software</Link></li>
                        <li><Link href='/solutions'>Solutions</Link></li>
                        <li><Link href='/#aboutus'>About Us</Link></li>
                        <li><Link href='/contactus'>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
            <div>
                <Link href='https://idtechsolutionsindia.com'>
                    <Image src="logos/id-tech.svg" alt='ID Tech Logo' width='100' height='100'/>
                </Link>
            </div>
        </footer>
    )
}

export default PageFooter