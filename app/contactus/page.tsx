/* eslint-disable react/no-unescaped-entities */
"use client"
import { useRef } from 'react'
import Image from 'next/image'
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
    console.log(data) //Connect to API here
  }

  const inputRef = useRef<HTMLElement>(null);

  const inputTextAnimation = () => {
        // inputRef.current.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded'. true) : console.log('false')
        if (inputRef.current) {
            inputRef.current.toggleAttribute('data-visible')
        };
  };

  return (
      <>
      <section className="contact">
        <div className="container pt-0">
          <div className="even-columns">
            <div className="flex flex-col flex-none gap-6">
              <div>
                <h1>Let's Get in Touch<span className='text-orange text-6xl sm:text-8xl'>.</span></h1>
                <div className="text-xl text-slate-400 font-medium tracking-wider">You can also reach as at <a href="mailto:customerservice@tyrsyn.com">customerservice@tyrsyn.com</a></div>
              </div>
              <form onSubmit={handleSubmit} action="" method="post" className="contact-form">
                <div className="contact-input-wrapper">
                  <input value={data.firstName} className="contact-input" autoComplete="given-name" name="First Name" type="text" required onChange={e => updateData({firstName :e.target.value})}/>
                  <label className='group-focus:translate-y-1'>First Name</label>
                  <MdAccountCircle/>
                </div>
                <div className="contact-input-wrapper">
                  <input value={data.lastName} className="contact-input group" autoComplete="family-name" name="Last Name" type="text" required onChange={e => updateData({lastName :e.target.value})}/>
                  <label className='group-focus:text-green-700'>Last Name</label>
                  <MdAccountCircle/>
                </div>
                <div className="contact-input-wrapper">
                  <input value={data.email} className="contact-input group" autoComplete="email" name="Email" type="text" required onChange={e => updateData({email :e.target.value})}/>
                  <label className='group-focus:text-green-700'>Email</label>
                  <MdMail/>
                </div>
                <div className="contact-input-wrapper">
                  <input value={data.phone} className="contact-input group" autoComplete="tel-national" name="Phone" type="text" required onChange={e => updateData({phone :e.target.value})}/>
                  <label className='group-focus:text-green-700'>Phone</label>
                  <MdPhone/>
                </div>
                <div className="contact-input-wrapper-full large">
                  <textarea value={data.message} name="Message" autoComplete="off" id="" cols={30} rows={10} className="contact-input group" required onChange={e => updateData({message :e.target.value})}></textarea>
                  <label className='group-focus:text-green-700'>Message</label>
                  <MdInbox/>
                </div>
                <button type='submit' className='hero-button'>Submit</button>
              </form>
            </div>
            <div className="flex justify-center items-center">
              <Image src="graphics/graphic-2.svg" width="1000" height="500" alt="" className='scale-x-[-1]'/>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }