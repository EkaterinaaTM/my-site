import React, { useState } from "react"
import Container from "../container/container"
import ThankyouBlock from "./thankyouBlock"

const Contacts = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const togglForm = e => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <Container>
      <section className="contacts">
        <h1 className="title-h1">Контакты</h1>
        <form
          className={`contacts_form ${isSubmitted && "contacts_form--hidden"}`}
          method="post"
          action="#"
        >
          <input className="input" placeholder="Мое имя" name="name" />
          <input className="input" placeholder="Моя почта" name="email" />
          <input className="input" placeholder="Мое сообщение" name="message" />
          <button className="button" onClick={togglForm}>
            Отправить
          </button>
        </form>
        {isSubmitted && <ThankyouBlock />}
      </section>
    </Container>
  )
}

export default Contacts
