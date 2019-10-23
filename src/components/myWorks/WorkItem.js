import React from "react"

const WorkItem = ({ img, link, desc }) => (
  <div className="works_item">
    <div className="works_item_img">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt="Hello Foody landing" />
      </a>
    </div>
    <div className="works_item_desc">{desc}</div>
  </div>
)

export default WorkItem
