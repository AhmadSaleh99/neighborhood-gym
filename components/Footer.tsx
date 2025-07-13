import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center my-4  border-t border-gray-300">
      <div className="links flex my-4 justify-between w-3/5">
        <Link href="/" className="hover:text-primary transition ease-in">
          Home
        </Link>
        <Link href="/classes" className="hover:text-primary transition ease-in">
          Classes
        </Link>
        <Link
          href="/trainers"
          className="hover:text-primary transition ease-in"
        >
          Trainers
        </Link>
        <Link
          href="/feedback"
          className="hover:text-primary transition ease-in"
        >
          Feedback
        </Link>
        {/* <button>primary
            <Link href="/login">Login</Link>
          </button> */}
      </div>

      <div className="flex flex-col items-center gap-4 my-4">
        <div className="socials flex gap-4">
          <img src="/images/instagram.png" alt="Instagram" />
          <img src="/images/facebook.png" alt="Facebook" />
          <img src="/images/twiter.png" alt="Twiter" />
        </div>
        <div className="copyright">@2024 Fitness Hub. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
