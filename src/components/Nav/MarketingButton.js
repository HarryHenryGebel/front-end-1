import React from "react"
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"

export default function MarketingButton () {

  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
        More Info (marketing pgs)
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            Testimonials
          </DropdownItem>
          <DropdownItem>
            Theme Ideas
          </DropdownItem>
          <DropdownItem>
            Contact
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Home
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  )
}