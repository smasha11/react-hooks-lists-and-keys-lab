import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksElement = links.map(function (link, index) {
    return <a href={`#${link}`} key={index}>{link}</a>
  })

  return <nav>{linksElement}</nav>;
}

export default NavBar;