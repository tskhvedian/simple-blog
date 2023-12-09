import React from "react";
import styles from "./blogpage.module.css";
import Image from "next/image";


const BlogPost = async ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>TITLE</h1>
          <p className={styles.desc}>
           DESC
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/16143559/pexels-photo-16143559/free-photo-of-landscape-of-rocky-snowcapped-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>USER</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16143559/pexels-photo-16143559/free-photo-of-landscape-of-rocky-snowcapped-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        TEXT
        </p>
      </div>
    </div>
  );
};

export default BlogPost;