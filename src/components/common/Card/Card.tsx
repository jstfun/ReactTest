import * as React from "react";
const styles = require("./Card.module.scss");

interface IProp {
  index: number;
  image: string;
}

export const Card: React.FC<IProp> = (props) => {
  const { index, image } = props;

  const getStyle = () => {
    let classnames = styles.container;
    if (index % 3 === 2) {
      classnames += " " + styles["row-end-item"];
    }
    return classnames;
  };

  return (
    <div className={getStyle()}>
      <div className={styles["card-img"]}>
        <img
          src="https://elasticbeanstalk-us-east-2-078538388162.s3.us-east-2.amazonaws.com/iron-forge-candidate-test/prod/images/vehicleImages/jetSki4.png"
          alt="Product image"
        ></img>
        <div className={styles["price-wrapper"]}>
          <span className={styles.price}>$999</span>
          <span className={styles.unit}>/day</span>
        </div>
      </div>
      <div className={styles["card-detail"]}>
        <span className={styles.type}>JET SKIS</span>
        <span className={styles.name}>2012 Hyundai Explore JL89</span>
        <span className={styles.address}>89 S. Main, San Diego, CA 92122</span>
      </div>
    </div>
  );
};
