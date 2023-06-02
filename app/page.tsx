import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
    <section className='h-[85vh] mb-8'>
    {/* <div className="custom-shape-top">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
    </svg>
    </div> */}


    <div className="container h-full">
      <div className="even-columns h-full">
        <div className='flex flex-col gap-6'>
          <h1 className="hero-header">
            <span data-content='Identification.' className='hero-text-white before:animate-hero-id-white'>
              <span className='hero-text-gradient animate-hero-id-gradient'> Identification.</span>
            </span>
            <span data-content='Tracking.' className='hero-text-white before:animate-hero-track-white'>
              <span className='hero-text-gradient animate-hero-track-gradient'> Tracking.</span>
            </span>
            <span data-content='Efficency.' className='hero-text-white before:animate-hero-eff-white'>
              <span className='hero-text-gradient animate-hero-eff-gradient'> Efficency.</span>
            </span>
          </h1>
            <div className='flex flex-row gap-4'>
              <Link href='/contactus' className='hero-button'>Contact Us</Link>
              <a href='#aboutus' className='hero-button'>About Us</a>
            </div>
        </div>

        <div className="flex"></div>
      </div>
    </div>
    </section>

    <section className='bg-gradient-to-r from-purple-1 to-purple bg-400% animate-gradient py-12'>
      <div className='container flex flex-col gap-8 bg-black-1'>
        <h2 className='font-semibold text-[2.5rem] text-center'>What We Do</h2>
        <div className='even-columns'>
          <div>
            <h3 className='font-semibold text-lg'>Lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio, voluptatibus, facere eius architecto ratione dolorum reprehenderit non reiciendis provident eum perspiciatis doloribus nesciunt incidunt quia, deleniti quibusdam tenetur error.</p>
          </div>
          <div>
            <h3 className='font-semibold text-lg'>Lorem</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deleniti. Culpa temporibus ratione, ipsam quo quasi minus odio voluptatem pariatur enim accusamus facere, sapiente alias et repudiandae adipisci harum a.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div>
            <h2 className='font-semibold text-[2.5rem] text-center'>Products & Solutions</h2> 
        </div>
        <ul className='slider'>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </section>

    <section className='bg-gradient-to-r from-orange to-red-400 bg-150%' id='aboutus'>
      <div className='container'>
            <h2 className='font-bold text-5xl mb-10'>About Us</h2>
        <div className='even-columns'>
          <ul className='flex flex-col gap-10'>
            <li>
              <h3 className='font-semibold text-3xl mb-2'>Vision</h3>
              <p>Our vision is to be a global leader in RFID solutions, driving the adoption and advancement of RFID technology worldwide. We aim to revolutionize industries by delivering intelligent and scalable RFID solutions that empower businesses to achieve operational excellence, gain real-time insights, and unlock new levels of efficiency and customer satisfaction.</p>
            </li>
            <li>
              <h3 className='font-semibold text-3xl mb-2'>Mission</h3>
              <p>To provide innovative and reliable RFID solutions that enhance efficiency, visibility, and productivity for our clients across various industries. We strive to be a trusted partner in their digital transformation journey, enabling them to optimize operations, improve asset tracking, and streamline processes through cutting-edge RFID technology.</p>
            </li>
          </ul>

          <ul className='flex flex-col gap-10'>
            <li>
              <h3 className='font-semibold text-3xl mb-2'>Our Values</h3>
              <p>Our vision is to be a global leader in RFID solutions, driving the adoption and advancement of RFID technology worldwide. We aim to revolutionize industries by delivering intelligent and scalable RFID solutions that empower businesses to achieve operational excellence, gain real-time insights, and unlock new levels of efficiency and customer satisfaction.</p>
            </li>
            <li>
              <h3 className='font-semibold text-3xl mb-2'>Mission</h3>
              <p>To provide innovative and reliable RFID solutions that enhance efficiency, visibility, and productivity for our clients across various industries. We strive to be a trusted partner in their digital transformation journey, enabling them to optimize operations, improve asset tracking, and streamline processes through cutting-edge RFID technology.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}
