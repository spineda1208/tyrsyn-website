/* eslint-disable react/no-unescaped-entities */
"use client"
import { FormEvent, useState } from 'react';
import {MdInbox, MdMail, MdPhone, MdAccountCircle} from 'react-icons/md'

export default function ContactPage() {

  type FormData = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    message: string
  }

  const INITIAL_DATA: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  }

  const [data, setData] = useState(INITIAL_DATA);

  function updateData(data: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...data}
    })
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log(data)
  }

  return (
      <>
      <section className="contact">
        <div className="container pt-0">
          <div className="flex flex-col flex-none gap-6">
            <div>
              <h1>Let's Get in Touch<span className='text-orange text-6xl sm:text-8xl'>.</span></h1>
              <div className="text-xl text-slate-400 font-medium tracking-wider">You can also reach as at <a href="mailto:customerservice@tyrsyn.com">customerservice@tyrsyn.com</a></div>
            </div>
            <form onSubmit={handleSubmit} action="" method="post" className="contact-form">
              <div className="contact-input-wrapper">
                <input value={data.firstName} className="contact-input" autoComplete="given-name" name="First Name" type="text" autoFocus required onChange={e => updateData({firstName :e.target.value})}/>
                <label>First Name</label>
                <MdAccountCircle/>
              </div>
              <div className="contact-input-wrapper">
                <input value={data.lastName} className="contact-input" autoComplete="family-name" name="Last Name" type="text" required onChange={e => updateData({lastName :e.target.value})}/>
                <label>Last Name</label>
                <MdAccountCircle/>
              </div>
              <div className="contact-input-wrapper">
                <input value={data.email} className="contact-input" autoComplete="email" name="Email" type="text" required onChange={e => updateData({email :e.target.value})}/>
                <label>Email</label>
                <MdMail/>
              </div>
              <div className="contact-input-wrapper">
                <input value={data.phone} className="contact-input" autoComplete="tel-national" name="Phone" type="text" required onChange={e => updateData({phone :e.target.value})}/>
                <label>Phone</label>
                <MdPhone/>
              </div>
              <div className="contact-input-wrapper-full large">
                <textarea value={data.message} name="Message" autoComplete="off" id="" cols={30} rows={10} className="contact-input" required onChange={e => updateData({message :e.target.value})}></textarea>
                <label>Message</label>
                <MdInbox/>
              </div>
              <button type='submit' className='hero-button'>Submit</button>
            </form>
          </div>
        </div>
      </section>
      </>
    )
  }