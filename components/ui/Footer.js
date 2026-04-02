import classes from './Footer.module.scss';
function Footer({ className }) {
    return (
      <footer className={`${className} ${classes.footer__class}`}>
        <p>© 2026 Lindy Ramirez, All Rights Reserved</p>
      </footer>
    );
  }
  
  export default Footer;