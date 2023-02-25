import React from "react"
import IconProps from "../types/icon-type"
import logo from "../../../../images/logo.png"

const MedusaIcon: React.FC<IconProps> = ({ size = "48", ...attributes }) => {
  const width = +size * 2.5 // width relative to height (from size prop)
  return <img alt="" src={logo} width={width} {...attributes} />
}

export default MedusaIcon
