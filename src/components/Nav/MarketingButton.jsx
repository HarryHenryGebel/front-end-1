import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function MarketingButton() {
  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          More Info
        </DropdownToggle>
        <DropdownMenu left="true">
          <DropdownItem href="https://not-a-potluck.gebel.tech/about.html">About Us</DropdownItem>
          <DropdownItem href="https://not-a-potluck.gebel.tech/themes.html">Theme Ideas</DropdownItem>
          <DropdownItem href="https://not-a-potluck.gebel.tech/gallery.html">Gallery</DropdownItem>
          <DropdownItem href="https://not-a-potluck.gebel.tech/contact.html">Contact Us</DropdownItem>
          <DropdownItem href="https://not-a-potluck.gebel.tech/testimonials.html">Testimonials</DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="https://not-a-potluck.gebel.tech/" >Home</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
}