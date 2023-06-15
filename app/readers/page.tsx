import Image from "next/image"

export default function ReadersPage() {
    return (
      <>
      {/* Automize processes */}
      <section>
        <div className="container flex flex-col">
          <h1 className="page-header-underlined">RFID Readers</h1>
          <div className="even-columns">
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
        <div className="container">
          <div className="flex flex-col gap-8">
            <div className="product-wrapper">
              <Image src='/images/reader.png' width='500' height='500' alt=""/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">Product Name</h4>
                <h5 className="product-price">Price</h5>
                <hr className="my-4"/>
                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate delectus mollitia rerum laborum amet sit minima cum soluta dolores quo expedita eligendi sequi, tenetur nisi, distinctio voluptates atque eos harum?</p>
              </div>
            </div>
            <div className="product-wrapper">
              <Image src='icons/handheld.svg' width='500' height='500' alt="" className="px-8"/>
              <div className="flex flex-col p-8 border-l-2 border-white">
                <h4 className="product-title">Product Name</h4>
                <h5 className="product-price">Price</h5>
                <hr className="my-4"/>
                <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate delectus mollitia rerum laborum amet sit minima cum soluta dolores quo expedita eligendi sequi, tenetur nisi, distinctio voluptates atque eos harum?</p>
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