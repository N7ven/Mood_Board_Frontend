/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Images from 'assets/Images';
import GaugeChart from 'react-gauge-chart';
import styles from './dashboard.module.scss';

const TodayReport = () => {
  return (
    <div className={styles.today_report}>
      <div className={styles.reports}>
        <ul>
          <li className={styles.happy}>
            <p>Happy</p>
            <h3>
              232
              <span>55 %</span>
            </h3>
            <img src={Images.HAPPY_ACTIVE} alt="Happy" width="30" />
          </li>
          <li className={styles.surprised}>
            <p>Surprised</p>
            <h3>
              120
              <span>22 %</span>
            </h3>
            <img src={Images.SURPRISED_ACTIVE} alt="Surprised" width="30" />
          </li>
          <li className={styles.confused}>
            <p>Confused</p>
            <h3>
              54
              <span>12 %</span>
            </h3>
            <img src={Images.CONFUSED_ACTIVE} alt="Confused" width="30" />
          </li>
          <li className={styles.disgusted}>
            <p>Disgusted</p>
            <h3>
              24
              <span>7 %</span>
            </h3>
            <img src={Images.DISGUSTED_ACTIVE} alt="Disgusted" width="30" />
          </li>
          <li className={styles.contempt}>
            <p>Contempt</p>
            <h3>
              43
              <span>10 %</span>
            </h3>
            <img src={Images.CONTEMPT_ACTIVE} alt="Contempt" width="30" />
          </li>
        </ul>
        <section className={styles.chart_container}>
          <h3 className={styles.mood}>HAPPY</h3>
          <GaugeChart
            id="gauge-chart2"
            className={styles.chart}
            nrOfLevels={5}
            colors={[ '#FF5656', '#FF8888', '#F1D614', '#84BD32', '#058C1A' ]}
            arcWidth={0.1}
            percent={0.92}
            cornerRadius={3}
            arcPadding={0.02}
          />
          <svg width="314" height="157" viewBox="0 0 314 157" fill="none" className={styles.gradient}>
            <g clipPath="url(#clip0_245_532)">
              <path d="M313.331 157.303C313.331 116.076 296.867 76.5371 267.56 47.3851C238.253 18.2332 198.504 1.85578 157.058 1.85577C115.612 1.85577 75.8632 18.2332 46.5563 47.3851C17.2494 76.5371 0.784918 116.076 0.784912 157.303L157.058 157.303H313.331Z" fill="url(#paint0_linear_245_532)" />
            </g>

            <linearGradient id="paint0_linear_245_532" x1="157.058" y1="1.85577" x2="157.058" y2="224" gradientUnits="userSpaceOnUse">
              <stop stopColor="#30AD43" />
              <stop offset="0.785" stopColor="white" stopOpacity="0" />
            </linearGradient>

          </svg>
          <svg viewBox="-14 -16 500 400" className={styles.chart_label}>
            <path id="curve" fill="transparent" d="M1 239.5C1 239.5 3.00006 13 241.25 0.499985C479.5 13 480 239.5 480 239.5" />
            <text width="500" fontSize="14px">
              <textPath xlinkHref="#curve">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                CONTEMPT
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                DISGUEST
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                CONFUSED
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                SURPRISED
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                HAPPY
              </textPath>
            </text>
          </svg>
        </section>
      </div>
      <div className={styles.customer_details}>
        <div className={styles.pro_detail}>
          <img src={Images.PROFILE_IMAGE} alt="profile" className={styles.proimg} />
          <p>
            Accompained with number of
            <ul className={styles.acc_user}>
              <li>
                <a className={styles.less}>
                  <img src={Images.LESS} alt="Less" width="28" />
                </a>
              </li>
              <li>
                <input type="text" />
              </li>
              <li>
                <a className={styles.add}>
                  <img src={Images.ADD} alt="Add" width="28" />
                </a>
              </li>
            </ul>
            people
          </p>
          <textarea placeholder="Comments" />
          <div className={styles.btn_cont}>
            <button type="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayReport;
