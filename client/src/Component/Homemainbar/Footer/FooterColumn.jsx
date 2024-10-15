import React from 'react';

const FooterColumn = ({ title, links }) => {
  return (
    <div className="flex flex-col items-start mt-3 text-sm text-neutral-700">
      <h2 className="text-xl font-semibold leading-relaxed text-neutral-800">
        {title}
      </h2>
      {links.map((link, index) => (
        <a
          key={index}
          href="#"
          className="mt-2 "
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default FooterColumn;