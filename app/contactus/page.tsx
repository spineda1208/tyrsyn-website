/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from 'react';
import {MdInbox, MdMail, MdPhone, MdAccountCircle} from 'react-icons/md'

export default function ContactPage() {
  const [sumn, setSumn] = useState('');  
  console.log(sumn)

  function handleSubmit() {
    return 1;
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
                <input className="contact-input" autoComplete="given-name" name="First Name" type="text" required/>
                <label>First Name</label>
                <MdAccountCircle/>
              </div>
              <div className="contact-input-wrapper">
                <input className="contact-input" autoComplete="family-name" name="Last Name" type="text" required/>
                <label>Last Name</label>
                <MdAccountCircle/>
              </div>
              <div className="contact-input-wrapper">
                <input className="contact-input" autoComplete="email" name="Email" type="text" required/>
                <label>Email</label>
                <MdMail/>
              </div>
              <div className="contact-input-wrapper">
                <input className="contact-input" autoComplete="tel-national" name="Phone" type="text" required/>
                <label>Phone</label>
                <MdPhone/>
              </div>
              <div className="contact-input-wrapper-full large">
                <textarea name="Message" autoComplete="off" id="" cols={30} rows={10} className="contact-input" required></textarea>
                <label>Message</label>
                <MdInbox/>
              </div>
              <button className='hero-button'>Submit</button>
            </form>
          </div>
        </div>
      </section>
      </>
    )
  }