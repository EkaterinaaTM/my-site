import React from "react"
import Container from "../container/container"
import WorkItem from "./WorkItem"
import data from "../../data"

const MyWorks = () => {
  return (
    <Container>
      <section className="works">
        <h1 className="title-h1">{data.myWorks.title}</h1>
        <p className="subtitle">
          {data.myWorks.subtitle}
          <a
            href={data.myWorks.myRepoLink}
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            Githab.
          </a>
          <br /> В том числе код данного сайта хранится
          <a
            href={data.myWorks.siteRepoLink}
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            {" "}
            здесь.
          </a>
        </p>
        <div className="works_items">
          {data.myWorks.worksList.map(myWork => (
            <WorkItem {...myWork} key={myWork.id} />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default MyWorks
