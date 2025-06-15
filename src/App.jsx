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
            <ProfileImage image="./src/assets/elon.jpg" alt="Elon Musk"/>
            <div className="business-card_content flex flex-col items-center px-4">
              <Name name="Anthony Holiday" />
              <Position role="Frontend Engineer & Webflow Developer"/>
              <a href="https://dev.anthony.holiday">dev.anthony.holiday</a>
              <div className="flex gap-4 justify-between w-full">
                <ContactButton text="Email" />
                <ContactButton text="LinkedIn" />
              </div>
              <div className="content_about flex flex-col gap-4">
                <InfoBlock
                  heading="About"
                  paragraph="I'm a Frontend Developer from western Canada building websites in Webflow and exploring the world. I enjoy working with React, Javascript, and am currently learning Next.js"
                  />
                <InfoBlock
                  heading="Interests"
                  paragraph="I've been to 26 countries (and counting), I love to eat spicy foods, and am always trying to learn something new both on and offline. In a past life life I managed a Michelin Star restaurant and also produced pop music"
                />
              </div>
            </div>
            <div className="business-card_socials flex gap-4 justify-center items-center py-8 bg-[#161619]">
              <SocialIcon icon="./src/assets/linkedin.svg" url="https://www.linkedin.com/in/anthony-holiday/"/>
              <SocialIcon icon="./src/assets/github.svg"/>
              <SocialIcon icon="./src/assets/webflow.svg"/>
            </div>
          </section>
        </main>
    </>
  )
}

export default App
