import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
    <section className=''>
      <div className="container">
        <div className="even-columns">
          <div className='grid gap-8'>
            <h1 className="font-bold text-7xl">Innovation In Security 
Making World Trade Safer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eum dignissimos ipsa hic minima dolore laborum sunt obcaecati? 
              Enim dolores sed et ipsam magnam eum quae ullam fugit, tempore dicta minus!</p>
              <div className='flex flex-row gap-4'>
                <Link href='/contactus' className='hero-button'>Contact Us</Link>
                <Link href='/contactus' className='hero-button'>About Us</Link>
              </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
              <Image src="logos/tyrsyn-white.svg" width="300" height="300" alt="logo"></Image>
              <div className='text-center font-black text-[4rem]'>Tyr & Syn</div>
          </div>
        </div>
      </div>
    </section>

    <section className='bg-gradient-to-r from-orange to-purple bg-400% animate-gradient'>
      <div className='container'>
        <div>
          <div>
            <h2>What We Do</h2>
            <p></p>
          </div>
        </div>
      </div>
    </section>

    <section className='p-20'>
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
