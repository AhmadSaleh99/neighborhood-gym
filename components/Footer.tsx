import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="links flex space-x-7 ">
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

      <div>
        <div className="socials">
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
