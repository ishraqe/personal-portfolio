import styles from "./intro.module.scss";

const Intro = () => {
  return (
    <div className="container section-padding">
      <div className={styles["intro-container"]}>
        <div className={styles["info-container"]}>
          <h3>Hi, my name is Anamul.</h3>
          <h1>
            I&apos;m a freelance UX/UI Designer with a marketing background
            specializing in Shopify & Webflow.
          </h1>
        </div>
        <div className={styles["image-container"]}>
          <div className={styles["image-wrapper"]}>hello</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
