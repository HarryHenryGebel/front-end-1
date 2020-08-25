import React from "react"
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"

export default function DashboardNav () {

  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          AfterLoginMenu
        </DropdownToggle>
        <DropdownMenu right>
          {/* map over upcoming events with dropdown and dynamic link */}
          <DropdownItem>
            Upcoming Event1
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  )
}

