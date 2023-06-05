export default function ReadersPage() {
    return (
      <>
      <section>
        <div className="container py-2">
          <h1 className="text-center font-semibold text-3xl">RFID Readers</h1>
          <p>An RFID reader is a device that uses radio waves to read data from an RFID tag. RFID tags are small, electronic devices that contain a unique identifier. When an RFID reader is turned on, it emits a radio wave signal. If an RFID tag is within range of the reader, the tag will receive the signal and respond by sending back its unique identifier. The reader will then decode the identifier and send it to a computer or other device for processing. RFID readers are used in a variety of applications, including inventory management, asset tracking, and access control.</p>
          
        </div>
      </section >

      <section id="integrated-readers">
        <div className="container">hello</div>
      </section>

      <section id="multi-antenna-readers">
        <div className="container">my</div>
      </section>

      <section id="handheld-readers">
        <div className="container">name is</div>
      </section>
      </>
    )
  }