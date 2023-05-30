import Link from 'next/link'
import Image from 'next/image'
import HomeIcon from './navbar'

const PageFooter = () => {
    return (
        <footer>
            <div> Logo and Socials
                <ul aria-label='Social links' role='list'>
                    <li><a href="#" aria-label='facebook'></a></li>
                    <li><a href="#" aria-label='instagram'></a></li>
                    <li><a href="#" aria-label='linkedin'></a></li>
                    <li><a href="#" aria-label='twitter'></a></li>
                </ul>
            </div>

            <div>Links
                <nav className='footer-nav'>
                    <ul aria-label='Footer' role='list'>
                        <li><Link href='#'></Link></li>
                        <li><Link href='#'></Link></li>
                        <li><Link href='#'></Link></li>
                        <li><Link href='#'></Link></li>
                        <li><Link href='#'></Link></li>
                        <li><Link href='#'></Link></li>
                        <li><Link href='#'></Link></li>
                        <li><Link href='#'></Link></li>
                    </ul>
                </nav>
            </div>

            <div>
                Contact Information idtech?
            </div>
        </footer>
    )
}

export default PageFooter