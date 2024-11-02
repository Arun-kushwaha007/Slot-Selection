import React from 'react';
import SocialIcons from './SocialIcons';
import FooterColumn from './FooterColumn';
import CompanyLogo from './CompanyLogo';

const Footer = () => {
  const companyLinks = [
    'About Us', 'Contact Us', 'Careers', 'Updates', 'Blogs', 'Account Deletion'
  ];

  const connectLinks = [
    'Email Us', 'Talk to A Counselor'
  ];

  const centreLinks = [
    'New Delhi', 'Patna', 'Kota', 'Noida', 'Dhanbad', 'Varanasi', 'View All'
  ];

  const quickLinks = [
    'Important Resource', 'Important Dates', 'Others'
  ];

  const examLinks = [
    'IIT JEE', 'NEET', 'GATE', 'NDA', 'UPSC', 'School Prep'
  ];

  const productLinks = [
    'App Learning', 'Offline Payments (Fin-Z)'
  ];

  return (
    <footer className="flex flex-col items-start justify-around px-16 pt-7 pb-36 border-b-2 bg-stone-50 border-zinc-200 max-md:px-5 max-md:pb-24 w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1065px] max-md:max-w-full">
        <div className="flex flex-col items-start max-md:max-w-full">
          <CompanyLogo />
          <p className="self-stretch mt-3 text-sm font-medium leading-5 text-neutral-700 max-md:max-w-full">
            We understand that every student has different needs and capabilities,
            <br /> which is why we create such a wonderful and unique curriculum that is the
            <br /> best fit for every student.
          </p>
          <div className="flex gap-4 mt-9">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1cfd1f5f3dc92fb3a09c66ec8734911dd1823ae38909b26824fe76d0f554faf?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b" alt="Company image 1" className="object-contain shrink-0 max-w-full rounded-lg aspect-[3.4] w-[136px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/760d91970ddbc54d15053ecac819db39851f7037c51c50dddcacc2832c48415b?placeholderIfAbsent=true&apiKey=3092f9c385594de3820d91d8eb73538b" alt="Company image 2" className="object-contain shrink-0 max-w-full rounded-lg aspect-[3] w-[120px]" />
          </div>
          <h2 className="mt-8 text-lg font-semibold leading-loose text-zinc-950">
            Let's get social :
          </h2>
          <SocialIcons />
        </div>
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Connect With Us" links={connectLinks} />
        <FooterColumn title="Our Centres" links={centreLinks} />
        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="Popular Exams" links={examLinks}   />
        <FooterColumn title="Our Products" links={productLinks} />
      </div>
    </footer>
  );
};

export default Footer;