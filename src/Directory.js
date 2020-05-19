import React from "react"
import {Link} from "@material-ui/core"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Directory.css"
const Directory = () => {
  return (
    <div className="directory">
      <Link href="https://github.com/nicchunglow" target="_blank">
    <GitHubIcon fontSize="large" className="icon"/>
      </Link>
      <Link href="https://www.linkedin.com/in/nicchung/" target="_blank">
    <LinkedInIcon fontSize="large" className="icon"/>
      </Link>
    </div>
  )
}

export default Directory