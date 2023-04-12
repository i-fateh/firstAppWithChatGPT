import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.socialIcons}>
            <a href="https://www.linkedin.com/in/fatehelboucherour/" target="_blank">
              <img src="./linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/i-fateh" target="_blank">
              <img src="./github.png" alt="GitHub" />
            </a>
            <a href="https://twitter.com/creazerty" target="_blank">
              <img src="./twitter.png" alt="twitter" />
            </a>
        </div>
        <p>2023 | First app created with ❤️ and intelligence by Me and ChatGPT</p>
        </footer>
    );
};
export default Footer;