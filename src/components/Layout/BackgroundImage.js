import backgroundImage from "../../assets/meals.jpeg";
import styles from "./BackgroundImage.module.css";

const BackgroundImage = () => {
  return (
    <div className={styles["main-image"]}>
      <img src={backgroundImage} alt="A lot of food on the table" />
    </div>
  );
};

export default BackgroundImage;
