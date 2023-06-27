import Image from "next/image"

export default function ReadersPage() {
    return (
      <>
      {/* Automize processes */}
      <section>
        <div className="container flex flex-col">
          <h1 className="page-header-underlined">RFID Readers</h1>
          <div className="even-columns mx-40">
            <div className="flex justify-center items-center">
              <p className="max-w-xl text-justify tracking-wide text-base">An RFID reader is a device that uses radio waves to read data from an RFID tag. RFID tags are small, electronic devices that contain a unique identifier. When an RFID reader is turned on, it emits a radio wave. If an RFID tag is within range of the reader it will receive the signal and respond by sending back its unique identifier. The reader will then decode the identifier and send it to a computer or other device for processing. RFID readers are used in a variety of applications, including inventory management, asset tracking, and access control.</p>
            </div>
            <div className="flex justify-center ">
              <Image src='icons/handheld.svg' width='300' height='300' alt="" className="justify-center"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-4">
          <ul className="flex flex-col gap-8">

            <li className="product-wrapper">
              <Image src='/images/readers/idt-87.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">Integrated Reader</h4>
                <h5 className="product-price">IDT 87</h5>
                <hr className="my-4"/>
                <p className="product-description">Capture real-time data, automate inventory management, enhance access control, and deliver personalized user experiences. Effortlessly track inventory, streamline the supply chain, grant secure access all seamlessley integrated and easy to use.</p>
              </div>
            </li>

            <li className="product-wrapper">
              <Image src='/images/readers/idt-85.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">Mid Range UHF Integrated Reader</h4>
                <h5 className="product-price">IDT 85</h5>
                <hr className="my-4"/>
                <p className="product-description">Higher performance, and longer range. This reader supports faster tag read/write operations with better identification capabilites at a longer range.</p>
              </div>
            </li>

            <li className="product-wrapper">
              <Image src='/images/readers/idt-85.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">Long Range UHF Integrated Reader</h4>
                <h5 className="product-price">IDT 88</h5>
                <hr className="my-4"/>
                <p className="product-description">Even better performance for tougher requirements. The IDT 88 can be used with more flexibility in many RFID application systems from logistics and access control to counterfeit prevenetion and industrial production controls.</p>
              </div>
            </li>

            <li className="product-wrapper">
              <Image src='/images/readers/idt-404.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">UHF 4 Port Reader</h4>
                <h5 className="product-price">IDT 404</h5>
                <hr className="my-4"/>
                <p className="product-description">A best in class high-end RFID reader in the 4 port family which enables long range and accurate reading of hidden or covered tags. The IDT 404 is designed using the latest Impinj R2000 module with a read rate of over 800 tags per second.</p>
              </div>
            </li>

            <li className="product-wrapper">
              <Image src='/images/readers/idt-527.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">Active Omni Directional Reader</h4>
                <h5 className="product-price">IDT 527</h5>
                <hr className="my-4"/>
                <p className="product-description">Active RFID reader IDT 527 can connect to various omni-directional antennas while remaining consistent and reliabe,. This provides expandability and flexibility with an adjustable range from 0-100 meters.</p>
              </div>
            </li>

            <li className="product-wrapper">
              <Image src='/images/readers/gate-readers-rfid.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">RFID HF Gate Readers</h4>
                <h5 className="product-price"></h5>
                <hr className="my-4"/>
                <p className="product-description">Our advanced HF RFID Gate readers serve as a powerful management system for a multitude of applications, including Automatic Time Attendance for Schools, Personnel Tracking in Manufacturing Plants, Library Security, and Access Control. With our cutting-edge UHF readers, you can effortlessly manage and monitor various operations, ensuring seamless efficiency, enhanced security, and streamlined processes</p>
              </div>
            </li>

            <li className="product-wrapper">
              <Image src='/images/readers/gate-readers-uhf.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">UHF Gate Readers</h4>
                <h5 className="product-price"></h5>
                <hr className="my-4"/>
                <p className="product-description">These advanced readers offer unparalleled performance and versatility. The UHF RFID Gate readers provide comprehensive management and detection for an even wider array of applications and solutions.</p>
              </div>
            </li>

          </ul>
        </div>
      </section>

      {/* <section id="integrated-readers">
        <div className="container">
          <h2 className="section-title">Integrated Readers</h2>
        </div>
      </section>

      <section id="multi-antenna-readers">
        <div className="container">
          <h2 className="section-title">Multi-Antenna Readers</h2>
        </div>
      </section>

      <section id="handheld-readers">
        <div className="container">
          <h2 className="section-title">Handheld Readers</h2>
        </div>
      </section> */}
      </>
    )
  }