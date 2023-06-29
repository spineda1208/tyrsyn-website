import Image from 'next/image'

export default function TagsPage() {
    return (
      <>
        <section>
        <div className="container flex flex-col">
          <h1 className="page-header-underlined before:w-56">RFID Tags</h1>
          <div className="even-columns">
            <div className="flex justify-center items-center">
              <p className="max-w-xl text-justify tracking-wide text-base">RFID tags are small electronic devices that consist of a microchip and an antenna. These tags are capable of wirelessly storing and transmitting data when in proximity to an RFID reader. The microchip contains unique identification information allowing for quick and automated identification, tracking, and monitoring of objects or individuals. This technology has widespread applications in various industries, enabling improved inventory management, access control, asset tracking, and more.</p>
            </div>
            <div className="flex justify-center ">
              <Image src='icons/tags.svg' width='300' height='300' alt="" className="justify-center"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container pt-4">
          <ul className="grid grid-flow-cols sm:grid-cols-4 gap-8">

            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Active UHF Tags</h4>
              <hr className=''/>
              <Image src='/images/tags/active-uhf-rfid-tags.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Apparel Tags</h4>
              <hr className=''/>
              <Image src='/images/tags/apperal-tracking-tags.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Wire Seals</h4>
              <hr className=''/>
              <Image src='/images/tags/rfid-wire-seals.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Soft Tags</h4>
              <hr className=''/>
              <Image src='/images/tags/buy-rfid-soft-tags.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">RFID Key Fobs</h4>
              <hr className=''/>
              <Image src='/images/tags/rfid-key-fobs.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">PCB Tags</h4>
              <hr className=''/>
              <Image src='/images/tags/pcb-rfid-tag-manufacturer.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Plastic Tags</h4>
              <hr className=''/>
              <Image src='/images/tags/plastic-seal-flat.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Asset Labels</h4>
              <hr className=''/>
              <Image src='/images/tags/rfid-asset-labels.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Cylinder Tags</h4>
              <hr className=''/>
              <Image src='/images/tags/rfid-cylinder-tags.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Meter Seals</h4>
              <hr className=''/>
              <Image src='/images/tags/rfid-electronic-meter-seals.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Laptop Tags</h4>
              <hr className=''/>
              <Image src='/images/tags/rfid-laptop-tags.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Laundry Tags</h4>
              <hr className=''/>
              <Image src='/images/tags/rfid-laundry-tags.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Pallet Tags</h4>
              <hr className=''/>
              <Image src='/images/tags/rfid-pallet-tags.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4">Tyre Tag</h4>
              <hr className=''/>
              <Image src='/images/tags/rfid-tyre-tags-for-cars--bus--trucks--vehicles.png' width='500' height='500' alt=""/>
            </li>
            <li className="product-wrapper flex-col mx-0">
              <h4 className="product-title text-center py-4 text-3xl">Tyre Tag 2</h4>
              <hr className=''/>
              <Image src='/images/tags/rfid-tyre-tags-for-carsbustrucks-vehicle-manufacturer.png' width='500' height='500' alt=""/>
            </li>
            
          </ul>
        </div>
      </section>
      </>
    )
  }