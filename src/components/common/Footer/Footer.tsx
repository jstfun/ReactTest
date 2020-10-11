import * as React from "react";

const styles = require("./Footer.module.scss");

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["appstore-img"]}></div>
      <div className={styles["legal-container"]}>
        <div className={styles["rr-wrapper"]}>
          <img src="/images/rrlogotransparent.png" alt="rr log"></img>
          <span aria-label="Powered by Recreatio">Powered by Recreatio</span>
        </div>
        <div className={styles["terms-wrapper"]}>
          <a className={styles.terms} href="#" aria-label="Terms of Use">
            Terms of Use
          </a>
          <a className={styles.privacy} href="#" aria-label="Private Policy">
            Privacy Policy
          </a>
        </div>
        <div className={styles["map-wrapper"]}>
          <a
            className={styles.maps}
            href="#"
            aria-label="Maps powered by Google"
          >
            Maps powered by
          </a>
          <img src="/images/google.png" alt="google icon"></img>
        </div>
      </div>
    </div>
  );
};
