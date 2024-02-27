import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappLink = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer font-Ubuntu lg:text-2xl text-lg"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappLink;
