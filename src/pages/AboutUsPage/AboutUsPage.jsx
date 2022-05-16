import alena from '../../images/team/alena.jpg';
import yehor from '../../images/team/yehor.jpg';

import styles from './AboutUsPage.module.css';

function AboutUsPage() {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Out team</h2>
      </div>
      <ul className={styles.teamList}>
        <li className={styles.teamItem}>
          <img src={yehor} alt="TeamLead" className={styles.image} width={280} height={300} />
          <div className={styles.info}>
            <h3 className={styles.name}>Yehor</h3>
            <p className={styles.position}>Team Lead Developer</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima sit ipsa ipsum vitae
              perferendis earum?
            </p>
          </div>
        </li>
        <li className={styles.teamItem}>
          <img
            src="https://via.placeholder.com/336"
            alt="ScrumMaster"
            className={styles.image}
            width={280}
            height={300}
          />
          <div className={styles.info}>
            <h3 className={styles.name}>Vladimir</h3>
            <p className={styles.position}>Scrum Master Developer</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima sit ipsa ipsum vitae
              perferendis earum?
            </p>
          </div>
        </li>
        <li className={styles.teamItem}>
          <img src={alena} alt="Developer" className={styles.image} width={280} height={300} />
          <div className={styles.info}>
            <h3 className={styles.name}>Alena</h3>
            <p className={styles.position}>Developer</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima sit ipsa ipsum vitae
              perferendis earum?
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default AboutUsPage;
