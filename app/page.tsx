import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
    <section className='h-[85vh] mb-8'>
    <div className="custom-shape-top">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
    </svg>
    </div>


    <div className="container h-full">
      <div className="even-columns h-full">
        <div className='flex flex-col gap-6'>
          <h1 className="hero-header mt-2">
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

    <section className='py-12'>
      <div className='container flex flex-col gap-8 bg-black rounded-lg p-16'>
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
    <hr className='text-black'/>
    <section className='' id='aboutus'>
      <div className='container flex flex-col'>
          <h2 className='font-bold text-5xl mb-10 text-center'>About Us</h2>
          <ul className='flex flex-col md:flex-row gap-16'>
            <li className='home-card'>
              <h3 className='home-card-title'>Vision</h3>
              <p>Our vision is to be a global leader in RFID solutions, driving the adoption and advancement of RFID technology worldwide. We aim to revolutionize industries by delivering intelligent and scalable RFID solutions that empower businesses to achieve operational excellence, gain real-time insights, and unlock new levels of efficiency and customer satisfaction.</p>
            </li>
            <li className='home-card'>
              <h3 className='home-card-title'>Mission</h3>
              <p>To provide innovative and reliable RFID solutions that enhance efficiency, visibility, and productivity for our clients across various industries. We strive to be a trusted partner in their digital transformation journey, enabling them to optimize operations, improve asset tracking, and streamline processes through cutting-edge RFID technology.</p>
            </li>
          </ul>

          <div className='home-card mt-16'>
            <h3 className='home-card-title'>Values</h3>
            <p>
              1	Innovation: We foster a culture of continuous innovation, embracing new technologies and ideas to stay at the forefront of the RFID industry. We constantly seek innovative solutions that address our clients evolving needs and help them overcome challenges.
              2	Reliability: We are committed to delivering high-quality and reliable RFID solutions that our clients can depend on. We prioritize the performance, accuracy, and durability of our products, ensuring they meet the highest standards of reliability and functionality.
              3	Customer Focus: We place our clients at the center of everything we do. We listen to their needs, understand their unique requirements, and strive to exceed their expectations. We are dedicated to providing exceptional customer service, building long-term relationships, and being a trusted partner in their RFID implementation journey.
              4	Collaboration: We believe in the power of collaboration and partnerships. We work closely with our clients, industry experts, and technology partners to co-create innovative solutions and drive meaningful outcomes. We foster a collaborative and inclusive environment where teamwork and knowledge sharing thrive.
              5	Integrity: We conduct our business with utmost integrity, ethics, and transparency. We adhere to the highest standards of professionalism, respecting the confidentiality and privacy of our clients. We maintain honesty, trustworthiness, and ethical conduct in all our interactions.
            These mission, vision, and values statements reflect our commitment to providing top-notch RFID solutions, driving innovation, and creating value for our clients while upholding the principles of integrity and customer-centricity.
            </p>
          </div>
      </div>
    </section>
    </>
  )
}
