import React from "react"
import About from "../components/about/about"
import MyWorks from "../components/myWorks/myWorks"
import Contacts from "../components/contacts/contacts"

import { Route, BrowserRouter, Switch } from "react-router-dom"
// import Routes from "../utils/routes"
import "../styles/index.scss"

import Sidebar from "../components/sidebar/sidebar"

// const pageQuery = graphql`
//   query IndexQuery {
//     allStrapiAbout {
//       edges {
//         node {
//           id
//           desc
//         }
//       }
//     }
//   }
// `

const IndexPage = () => {
  // const routeResults = useRoutes(Routes)
  // console.log("strapi", pageQuery)
  return (
    <BrowserRouter>
      <div className="main">
        {/* {routeResults} */}
        <Switch>
          <Route path="/about" component={About} exact />
          <Route path="/works" component={MyWorks} exact />
          <Route path="/contacts" component={Contacts} exact />
        </Switch>
        <Sidebar />
      </div>
    </BrowserRouter>
  )
}

export default IndexPage
