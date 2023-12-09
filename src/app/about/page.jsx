import Image from "next/image";
import styles from "./about.module.css";
import Button from "@/components/Button/button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/316398/pexels-photo-316398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni hic
            at odit, repellendus error ab, earum, doloremque qui sit consequatur
            ad itaque reiciendis. <br/><br/> Asperiores, consectetur recusandae corrupti
            labore exercitationem totam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni hic
            at odit, repellendus error ab, earum, doloremque qui sit consequatur
            ad itaque reiciendis.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni hic
            at odit, repellendus error ab, earum, doloremque qui sit consequatur
            ad itaque reiciendis.<br/><br/>
            - Dynamic Websites
            <br/><br/>
            - Fast and Handy 
            <br/><br/>
            - Mobile apps   


          </p>
          <Button  text="Contact" url="contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
