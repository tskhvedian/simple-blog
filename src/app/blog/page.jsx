import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <div>
      <Link href="/blog/blogID" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16143559/pexels-photo-16143559/free-photo-of-landscape-of-rocky-snowcapped-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>TITLE</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            dolor. Consequatur delectus eum magnam odit minima deleniti
            explicabo expedita eaque rem impedit. Provident est suscipit ipsam
            facere ratione similique deserunt?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
