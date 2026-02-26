import React, { useState } from 'react'


const MegaMenuSmm = () => {
  const [activeMegaManu, setActiveMegaManu] = useState("nxl-mega-menu-sm")
  const handleTabClick = (tab_class) => {
    setActiveMegaManu(`${tab_class} show`)
  }

  return (
    <div className="dropdown nxl-h-item nxl-mega-menu">
      <a href="#" className="btn btn-light-brand" data-bs-toggle="dropdown" data-bs-auto-close="outside"> SMM </a>
    </div>
  )
}

export default MegaMenuSmm