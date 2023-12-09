import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 EBE. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          alt="facebook"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/2.png"
          alt="instagram"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/3.png"
          alt="twitter"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/4.png"
          alt="youtube"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
