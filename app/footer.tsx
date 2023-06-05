import Link from 'next/link'
import Image from 'next/image'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'

const PageFooter = () => {
    return (
        <footer>
            <div className='flex flex-col'>
                <Link href="/">
                    <Image src="logos/tyrsyn-white.svg" width="85" height="85" alt='White Logo' className='mx-auto mb-6 opacity-100 hover:opacity-50 transition-all duration-200'></Image>
                </Link>
                <ul className='footer-socials' aria-label='Social links' role='list'>
                    <li><Link href="https://www.facebook.com/people/TyrSyn/100087883292431/" aria-label='facebook' className='hover:text-slate-700 transition-all duration-200'><BsFacebook size="25"/></Link></li>
                    <li><Link href="https://www.instagram.com/tyrandsyn/" aria-label='instagram' className='hover:text-slate-700 transition-all duration-200'><BsInstagram size="25"/></Link></li>
                    <li><Link href="https://linkedin.com" aria-label='linkedin' className='hover:text-slate-700 transition-all duration-200'><BsLinkedin size="25"/></Link></li>
                </ul>
            </div>
            <div className='flex justify-center sm:contents'>
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
            <div className='flex justify-center select-none'>
                <div className='w-[150px] sm:mr-40'>
                <Link href='https://www.idtechsolutionsindia.com'>
                    <Image src="logos/idtech/powered-by.svg" alt='ID Tech Logo' width='150' height='64' className='opacity-50 hover:opacity-80 transition-all duration-200'/>
                </Link>
                </div>
            </div>
        </footer>
    )
}

export default PageFooter