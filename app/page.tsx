import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
    <section>
      <div className="container">
        <div className="even-columns">
          <div>
            <h1 className="font-bold text-7xl">Tyr & Syn</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eum dignissimos ipsa hic minima dolore laborum sunt obcaecati? 
              Enim dolores sed et ipsam magnam eum quae ullam fugit, tempore dicta minus!</p>
              <Link href='/contactus' className='nav-gradientbutton'>Contact Us</Link>
          </div>
          <div>
              <Image src="logos/tyrsyn-white.svg" width="100" height="100" alt="logo"></Image>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div>
          <div>
            <h2>What We Do</h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='even-columns'>
          <div>
            <h2>About Us</h2>
            <h3></h3>
          </div>
          <div>
            <ul>
              <li>
                <h3>Vision</h3>
                <p>Make world trade safe.</p>
              </li>
              <li>
                <h3>Mission</h3>
                <p>To be a customer centric organization focused on illuminating cargo integrity across the supply chain while serving cargo owners,
                   logistics operators, terminal operators, shipping lines and government authorities.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
