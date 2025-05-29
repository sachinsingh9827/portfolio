import React from "react";
import { Link } from "react-router-dom";

const BtnPrimary = ({ text, to, download = false, Icon }) => {
  const classes =
    "relative bg-[rgb(246,246,246)] uppercase font-extrabold tracking-[1px] text-[1.3rem] text-[#004080] mt-4 no-underline py-2 px-6 rounded-full transition duration-500 ease-in-out inline-flex items-center gap-2 hover:bg-[rgb(230,230,230)]";

  const styles = {
    boxShadow: "white -12px -12px 25px, #004080 12px 12px 25px",
    fontFamily: "'Gilroy-Heavy', sans-serif",
  };

  const ping = (
    <span className="absolute top-1 right-2 flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#004080] opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#004080]"></span>
    </span>
  );

  const content = (
    <>
      {ping}
      {text}
      {Icon && <Icon className="rotate-[45deg] w-4 h-4" />}
    </>
  );

  return download ? (
    <a href={to} download className={classes} style={styles}>
      {content}
    </a>
  ) : (
    <Link to={to} className={classes} style={styles}>
      {content}
    </Link>
  );
};

export default BtnPrimary;
