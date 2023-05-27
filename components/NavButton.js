import React from "react";
import Link from "next/link";

const NavButton = ({ props }) => {
  const title = props.title;
  const link = props.link;
  const blank = props.blank || false
  return (
  <Link 
    href={link}
    target={blank ? '_blank' : '_self'}
    className=" px-3 mx-1 my-1 mybutifulbutton "
  
  > 
    {title}  
  </Link>
  
  );
};

export default NavButton;
