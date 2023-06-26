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
              <p className="max-w-xl text-justify tracking-wide text-base">An RFID reader is a device that uses radio waves to read data from an RFID tag. RFID tags are small, electronic devices that contain a unique identifier. When an RFID reader is turned on, it emits a radio wave signal. If an RFID tag is within range of the reader, the tag will receive the signal and respond by sending back its unique identifier. The reader will then decode the identifier and send it to a computer or other device for processing. RFID readers are used in a variety of applications, including inventory management, asset tracking, and access control.</p>
            </div>
            <div className="flex justify-center ">
              <Image src='icons/handheld.svg' width='300' height='300' alt="" className="justify-center"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-4">
          <div className="flex flex-col gap-8">

            <div className="product-wrapper">
              <Image src='/images/readers/idt-87.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">Integrated Reader</h4>
                <h5 className="product-price">IDT 87</h5>
                <hr className="my-4"/>
                <p className="product-description">ID Tech Solutions Provides a comprehensive range of RFID tags and Readers for a variety of industries. We have an excellent working knowledge of LF( Low Frequency ) , HF( High Frequency ) and UHF( Ultra High Frequency) Our team is well equipped to design RFID management software to work seamlessly in the most demanding environment. We have deployed our solutions in a range of highly specialized vertical markets that include Coal Mines, Toll Roads, Airports, Hotels, Railway Stations, libraries, Hospitals, Textile Manufacturing, Automotive, Fashion, Apparel, Hospitality and others.</p>
              </div>
            </div>

            <div className="product-wrapper">
              <Image src='/images/readers/idt-404.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">UHF 4 Port Reader</h4>
                <h5 className="product-price">IDT 404</h5>
                <hr className="my-4"/>
                <p className="product-description">A best in class high-end RFID reader in the 4 port family which enables long range and accurate reading of hidden or covered tags. The IDT 404 is designed using the latest Impinj R2000 module with a read rate of over 800 tags per second.</p>
              </div>
            </div>


            <div className="product-wrapper">
              <Image src='/images/readers/idt-85.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">Mid Range UHF Integrated Reader</h4>
                <h5 className="product-price">IDT 85</h5>
                <hr className="my-4"/>
                <p className="product-description">IDT 85 is a high performance UHF RFID integrated reader. It is designed upon fully self-intellectual property. Based on proprietary efficient digital signal processing algorithm, it supports fast tag read/write operation with high identification.</p>
              </div>
            </div>

            <div className="product-wrapper">
              <Image src='/images/readers/idt-85.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">Long Range UHF Integrated Reader</h4>
                <h5 className="product-price">IDT 88</h5>
                <hr className="my-4"/>
                <p className="product-description">IDT 88 is a high performance UHF RFID integrated reader. It is designed upon fully self-intellectual property. Based on proprietary efficient digital signal processing algorithm, it supports fast tag read/write operation with high identification rate. It can be widely applied in many RFID application systems such as logistics, access control, and anti-counterfeit and industrial production process control system.</p>
              </div>
            </div>


            <div className="product-wrapper">
              <Image src='/images/readers/idt-527.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">Active Omni Directional Reader</h4>
                <h5 className="product-price">IDT 527</h5>
                <hr className="my-4"/>
                <p className="product-description">Active RFID reader IDT 527 can connect to various omni-directional antennas, with high identification and reliability, strong expand ability, etc. The read range is adjustable within 0~100 meter.</p>
              </div>
            </div>

            <div className="product-wrapper">
              <Image src='/images/readers/gate-readers-rfid.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">RFID HF Gate Readers</h4>
                <h5 className="product-price"></h5>
                <hr className="my-4"/>
                <p className="product-description">ID Tech Solutions provides a comprehensive range of UHF readers which can be used for HF RFID Gates readers, which is an advanced management system for Automatic Time Attendance for Schools, Personnel Tracking in Manufacturing Plants, Library Security, Access Control.</p>
              </div>
            </div>

            <div className="product-wrapper">
              <Image src='/images/readers/gate-readers-uhf.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">UHF Gate Readers</h4>
                <h5 className="product-price"></h5>
                <hr className="my-4"/>
                <p className="product-description">ID Tech Solutions provides a comprehensive range of UHF readers which can be used for HF RFID Gates readers, which is an advanced management system for Automatic Time Attendance for Schools, Personnel Tracking in Manufacturing Plants, Library Security, Access Control.</p>
              </div>
            </div>

          </div>
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