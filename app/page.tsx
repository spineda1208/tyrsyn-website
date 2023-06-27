/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
    <section className='pt-32 pb-40 back-image content-[""]'>
    {/* <div className="custom-shape-top">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
    </svg>
    </div> */}
    <div className="container pt-0 h-full">
      <div className="even-columns h-full">
        <div className='flex flex-col gap-4'>
          <h1 className="hero-header">
            <span data-content='Identification.' className='hero-text-white before:animate-hero-id-white'>
              <span className='hero-text-gradient animate-hero-id-gradient'>Identification.</span>
            </span>
            <span data-content='Tracking.' className='hero-text-white before:animate-hero-track-white'>
              <span className='hero-text-gradient animate-hero-track-gradient'>Tracking.</span>
            </span>
            <span data-content='Efficency.' className='hero-text-white before:animate-hero-eff-white'>
              <span className='hero-text-gradient animate-hero-eff-gradient'>Efficency.</span>
            </span>
          </h1>
          <div className='px-2 max-w-xs sm:max-w-md font-thin sm:font-medium sm:tracking-wider'>We provide state of the art solutions for inventory and asset management with an ecosystem of RFID devices and software.</div>
          <div className='flex flex-row gap-4'>
            <Link href='/contactus' className='hero-button'>Contact Us</Link>
            <Link href='#aboutus' className='hidden sm:hero-button'>About Us</Link>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section>
      <div className='container'>
        <div className='even-columns h-96'>
          <div className='home-text-wrapper'>
            <div className='home-text-pre text-purple'></div>
            <h3 className='home-text-header'>Enhancing Efficiency,<br/> Visibility,<br/> & Productivity</h3>
            <p className='home-text-subtext'>Our solutions for tracking inventory & assets throughout your business allow you a greater scope of visibility allowing for better control and development of business processes.</p>
          </div>
          <div className='home-showcase-blue'>
          <img src="logos/tyrsyn-white.svg" alt=""/>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='container'>
        <div className='even-columns h-96'>
          <div className='home-text-wrapper'>
            <div className='home-text-pre text-blue-700'></div>
            <h3 className='home-text-header'>Optimize Operations</h3>
            <p className='home-text-subtext'>Automate manual tasks, reducing errors and improving your overall efficiency. We equip businesses with the tools to stay ahead of the competition.</p>
          </div>
          <div className='home-showcase-blue'>
          <Image src="logos/tyrsyn-white.svg" width="500" height="500" alt=""/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='even-columns h-96'>
          <div className='home-text-wrapper'>
            <div className='home-text-pre text-orange'> Lorem, ipsum dolor.</div>
            <h3 className='home-text-header'>Lorem ipsum dolor sit amet consectetur.</h3>
            <p className='home-text-subtext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sit deleniti aut!</p>
          </div>
          <div className='home-showcase-orange'>
          <img src="logos/tyrsyn-black.svg" alt=""/>
          </div>
        </div>
      </div>
    </section>

    <section id='aboutus'>
      <div className='pb-8 container flex flex-col'>
          <h2 className='page-header'>About Us</h2>
          <ul className='flex flex-col md:flex-row gap-16'>
            <li className='home-card'>
              <h3 className='home-card-title'>Vision</h3>
              <p>Our vision is to be a leader in RFID solutions, driving the adoption and advancement of RFID technology worldwide. We aim to revolutionize industries by delivering intelligent and scalable RFID solutions that empower businesses to achieve operational excellence, gain real-time insights, and unlock new levels of efficiency and customer satisfaction.</p>
            </li>
            <li className='home-card'>
              <h3 className='home-card-title'>Mission</h3>
              <p>To provide innovative and reliable RFID solutions that enhance efficiency, visibility, and productivity for our clients across various industries. We strive to be a trusted partner in their digital transformation journey, enabling them to optimize operations, improve asset tracking, and streamline processes through cutting-edge RFID technology.</p>
            </li>
          </ul>
          {/* <div className='home-card bg-transparent mt-16 justify-center'>
            <h3 className='home-card-title mb-2'>Values</h3>
            <div className='sm:hidden content-[""] mx-auto w-20 h-1 sm:w-32 sm:h-2 rounded-xl bg-black mb-4'></div>
            <ul className='card-list justify-center'>
              <li><h4>Innovation</h4>We foster a culture of continuous innovation, embracing new technologies and ideas to stay at the forefront of the RFID industry. We constantly seek innovative solutions that address our clients evolving needs and help them overcome challenges.</li>  
              <li><h4>Reliability</h4>We are committed to delivering high-quality and reliable RFID solutions that our clients can depend on. We prioritize the performance, accuracy, and durability of our products, ensuring they meet the highest standards of reliability and functionality.</li>  
              <li><h4>Customer Focus</h4>We place our clients at the center of everything we do. We listen to their needs, understand their unique requirements, and strive to exceed their expectations. We are dedicated to providing exceptional customer service, building long-term relationships, and being a trusted partner in their RFID implementation journey.</li>  
              <div className='hidden md:w-full'/>
              <div className='hidden md:w-1'/>
              <li><h4>Collaboration</h4>We believe in the power of collaboration and partnerships. We work closely with our clients, industry experts, and technology partners to co-create innovative solutions and drive meaningful outcomes. We foster a collaborative and inclusive environment where teamwork and knowledge sharing thrive.</li>  
              <li><h4>Integrity</h4>We conduct our business with utmost integrity, ethics, and transparency. We adhere to the highest standards of professionalism, respecting the confidentiality and privacy of our clients. We maintain honesty, trustworthiness, and ethical conduct in all our interactions.</li>  
            </ul>
          </div> */}
      </div>
    </section>

    {/* <div className='content-[""] w-screen h-4 bg-gradient-to-r from-purple to-red-600'></div> */}
    {/* <section className='pb-12'>
      <div className='container flex flex-col gap-8 bg-black rounded-lg p-16 pt-0'>
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
    </section> */}
    </>

  )
}
