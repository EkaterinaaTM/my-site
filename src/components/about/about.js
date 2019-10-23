import React from "react"
import Container from "../container/container"
import MyPhoto from "../../images/myPhoto.jpg"

import data from "../../data"

const About = () => {
  return (
    <Container>
      <section className="about">
        <h1 className="title-h1">Обо мне</h1>
        <div className="about_wrapper">
          <div className="about_photo-wrapper">
            <img className="about_photo" src={MyPhoto} alt="portfolio work" />
          </div>
          <p
            className="about_text"
            dangerouslySetInnerHTML={{ __html: data.aboutMe.desc }}
          />
        </div>
      </section>
    </Container>
  )
}

export default About
