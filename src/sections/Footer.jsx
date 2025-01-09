const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a href="https://github.com/SamVerse" target="_blank" className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <a href="https://x.com/SameerS65019846" target="_blank" className="social-icon">
            <img  src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
          <a href="https://www.linkedin.com/in/sameersingh19/" target="_blank" className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border-none border-black-200;">
            <img src="/assets/linkedin.svg"  alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">© 2024 Sameer Singh. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;