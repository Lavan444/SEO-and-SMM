import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const MegaMenu = () => {
  const [activeMegaManu, setActiveMegaManu] = useState("nxl-mega-menu-sm")
  const handleTabClick = (tab_class) => {
    setActiveMegaManu(`${tab_class} show`)
  }

  return (
    <div className="dropdown nxl-h-item nxl-mega-menu">
      {/* <a href="#" className="btn btn-light-brand" data-bs-toggle="dropdown" data-bs-auto-close="outside"> SEO </a> */}
     <Link
  to="/"
  className="btn btn-light-brand"
  data-bs-toggle="dropdown"
  data-bs-auto-close="outside"
>
  SEO
</Link>
    </div>
  )
}

export default MegaMenu