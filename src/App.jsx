import { useState } from 'react'
import './App.css'
import ContactButton from "./components/ContactBtn"
import InfoBlock from "./components/InfoBlock"
import SocialIcon from "./components/SocialIcons"
import Name from "./components/Name"
import Position from "./components/Position"
import ProfileImage from "./components/ProfileImage"

function App() {
  return (
    <>
        <main className="flex flex-row items-center justify-center bg-[#1A1B21] rounded-2xl">
          <section className="section_business-card w-lg flex flex-col rounded-2xl overflow-hidden">
            <ProfileImage image="/anthony-hiking.JPEG" alt="Anthony Holiday hiking"/>
            <div className="business-card_content flex flex-col items-center p-4">
              <Name name="Anthony Holiday" />
              <Position role="Frontend Engineer & Webflow Developer" color="text-orange-300"/>
              <a className="transition ease-in hover:text-white" href="https://dev.anthony.holiday">dev.anthony.holiday</a>
              <div className="flex gap-4 justify-between w-full py-4">
                <ContactButton text="Email" url=""/>
                <ContactButton text="LinkedIn" url="https://www.linkedin.com/in/anthony-holiday/"/>
              </div>
              <div className="content_about flex flex-col gap-4 py-4">
                <InfoBlock
                  heading="About"
                  paragraph="I'm a Frontend Developer from western Canada building websites in Webflow and exploring the world. I enjoy working with React, Javascript, and am currently learning Next.js"
                  />
                <InfoBlock
                  heading="Interests"
                  paragraph="I've been to 26 countries (and counting), I love to eat spicy foods, and am always trying to learn something new both on and offline. In a past life life I managed a Michelin Star restaurant and also produced pop music."
                />
              </div>
            </div>
            <div className="business-card_socials flex gap-4 justify-center items-center py-8 bg-[#161619]">
              <SocialIcon icon="/linkedin.svg" url="https://www.linkedin.com/in/anthony-holiday/"/>
              <SocialIcon icon="/github.svg" url="https://github.com/anthonyholiday"/>
              <SocialIcon icon="/webflow.svg" url="https://webflow.com/@sitkadesign"/>
            </div>
          </section>
        </main>
    </>
  )
}

export default App
