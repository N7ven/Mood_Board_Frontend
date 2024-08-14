import React from 'react';
import Images from 'assets/Images';
import LineCharts from 'components/minor/chart/line';
import DateRangePickerComp from 'components/minor/react-date-range/react-date-range';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import GIF001 from 'assets/images/gif/gif001.gif';
import GIF002 from 'assets/images/gif/gif002.gif';
import GIF003 from 'assets/images/gif/gif003.gif';
import GIF004 from 'assets/images/gif/gif004.gif';
import GIF005 from 'assets/images/gif/gif005.gif';
import C1 from 'assets/images/removable/customer01.png';
import C2 from 'assets/images/removable/customer02.png';
import C3 from 'assets/images/removable/customer03.png';

import Purchases from './purchases';
import History from './history';
import TodayReport from './today-report';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  const [ showmemberHappy, setShowMemberHappy ] = React.useState(false);
  const [ showmemberSurprised, setShowMemberSurprised ] = React.useState(false);
  const [ showmemberConfused, setShowMemberConfused ] = React.useState(false);
  const [ showmemberDisgusted, setShowMemberDisgusted ] = React.useState(false);
  const [ showmemberContempt, setShowMemberContempt ] = React.useState(false);

  const [ value, setValue ] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const openShowmemberHappy = () => {
    setShowMemberHappy(true);
  };
  const closeShowmemberHappy = () => {
    setShowMemberHappy(false);
  };

  const openShowmemberSurprised = () => {
    setShowMemberSurprised(true);
  };
  const closeShowmemberSurprised = () => {
    setShowMemberSurprised(false);
  };

  const openShowmemberConfused = () => {
    setShowMemberConfused(true);
  };
  const closeShowmemberConfused = () => {
    setShowMemberConfused(false);
  };

  const openShowmemberDisgusted = () => {
    setShowMemberDisgusted(true);
  };
  const closeShowmemberDisgusted = () => {
    setShowMemberDisgusted(false);
  };

  const openShowmemberContempt = () => {
    setShowMemberContempt(true);
  };
  const closeShowmemberContempt = () => {
    setShowMemberContempt(false);
  };
  return (
    <div className={styles.dashboard_container}>
      <div className={styles.dashboard_data}>
        <div className={styles.chartContainer}>
          <ul className={styles.moodList}>
            <li>
              <div className={`${styles.happy} ${styles.mood}`} onClick={openShowmemberHappy} role="button" tabIndex="0">
                <div className={styles.emoji}>
                  <img src={Images.HAPPY} alt="Happy" width="24" />
                </div>
                <div className={styles.txtCont}>
                  <h6>Happy</h6>
                  <h3>
                    380
                    <span>60%</span>
                  </h3>
                </div>
              </div>
              {showmemberHappy
              && (
                <ul>
                  <li>
                    <a className={styles.user}><img src={C1} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C2} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C3} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C1} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C2} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C3} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.close} onClick={closeShowmemberHappy} role="button" tabIndex="0"><img src={Images.CLOSE} alt="User" /></a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div className={`${styles.surprised} ${styles.mood}`} onClick={openShowmemberSurprised} role="button" tabIndex="0">
                <div className={styles.emoji}>
                  <img src={Images.SURPRISED} alt="surprised" width="24" />
                </div>
                <div className={styles.txtCont}>
                  <h6>Surprised</h6>
                  <h3>
                    194
                    <span>20%</span>
                  </h3>
                </div>
              </div>
              {showmemberSurprised
              && (
                <ul>
                  <li>
                    <a className={styles.user}><img src={C1} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C2} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C3} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C1} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C2} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C3} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.close} onClick={closeShowmemberSurprised} role="button" tabIndex="0"><img src={Images.CLOSE} alt="User" /></a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div className={`${styles.confused} ${styles.mood}`} onClick={openShowmemberConfused} role="button" tabIndex="0">
                <div className={styles.emoji}>
                  <img src={Images.CONFUSED} alt="confused" width="24" />
                </div>
                <div className={styles.txtCont}>
                  <h6>Confused</h6>
                  <h3>
                    86
                    <span>8%</span>
                  </h3>
                </div>
              </div>
              {showmemberConfused
              && (
                <ul>
                  <li>
                    <a className={styles.user}><img src={C1} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C2} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C3} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C1} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C2} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C3} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.close} onClick={closeShowmemberConfused} role="button" tabIndex="0"><img src={Images.CLOSE} alt="User" /></a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div className={`${styles.disgusted} ${styles.mood}`} onClick={openShowmemberDisgusted} role="button" tabIndex="0">
                <div className={styles.emoji}>
                  <img src={Images.DISGUSTED} alt="disgusted" width="24" />
                </div>
                <div className={styles.txtCont}>
                  <h6>Disgusted</h6>
                  <h3>
                    67
                    <span>7%</span>
                  </h3>
                </div>
              </div>
              {showmemberDisgusted
              && (
                <ul>
                  <li>
                    <a className={styles.user}><img src={C1} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C2} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C3} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C1} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C2} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C3} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.close} onClick={closeShowmemberDisgusted} role="button" tabIndex="0"><img src={Images.CLOSE} alt="User" /></a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <div className={`${styles.contempt} ${styles.mood}`} onClick={openShowmemberContempt} role="button" tabIndex="0">
                <div className={styles.emoji}>
                  <img src={Images.CONTEMPT} alt="contempt" width="24" />
                </div>
                <div className={styles.txtCont}>
                  <h6>Contempt</h6>
                  <h3>
                    45
                    <span>5%</span>
                  </h3>
                </div>
              </div>
              {showmemberContempt
              && (
                <ul>
                  <li>
                    <a className={styles.user}><img src={C1} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C2} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C3} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C1} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C2} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.user}><img src={C3} alt="User" /></a>
                  </li>
                  <li>
                    <a className={styles.close} onClick={closeShowmemberContempt} role="button" tabIndex="0"><img src={Images.CLOSE} alt="User" /></a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <div className={styles.emotTrend}>
            <LineCharts />
          </div>
        </div>
        <div className={styles.customer_data}>
          <div className={styles.customer_list}>
            <ul>
              <li className={`${styles.active} ${styles.happy}`}>
                <a>
                  <span className={styles.segments}>
                    <img src={Images.SEGMENT01} alt="Segments" width="16" />
                  </span>
                  <div className={styles.user}>
                    <span className={styles.profileimg}>
                      <img src={Images.CUSTOMER01} alt="Customer" width="36" />
                    </span>
                    <h5 className={styles.user}>
                      P001
                    </h5>
                  </div>
                  <span className={styles.customer_type}>
                    E
                  </span>
                </a>
              </li>
              <li className={`${styles.surprised}`}>
                <a>
                  <span className={styles.segments}>
                    <img src={Images.SEGMENT02} alt="Segments" width="16" />
                  </span>
                  <div className={styles.user}>
                    <span className={styles.profileimg}>
                      <img src={Images.CUSTOMER02} alt="Customer" width="36" />
                    </span>
                    <h5>
                      P002
                    </h5>
                  </div>
                  <span className={styles.customer_type}>
                    N
                  </span>
                </a>
              </li>
              <li className={`${styles.confused}`}>
                <a>
                  <span className={styles.segments}>
                    <img src={Images.SEGMENT03} alt="Segments" width="16" />
                  </span>
                  <div className={styles.user}>
                    <span className={styles.profileimg}>
                      <img src={Images.CUSTOMER03} alt="Customer" width="36" />
                    </span>
                    <h5>
                      P003
                    </h5>
                  </div>
                  <span className={styles.customer_type}>
                    EN
                  </span>
                </a>
              </li>
              <li className={`${styles.disgusted}`}>
                <a>
                  <span className={styles.segments}>
                    <img src={Images.SEGMENT04} alt="Segments" width="16" />
                  </span>
                  <div className={styles.user}>
                    <span className={styles.profileimg}>
                      <img src={Images.CUSTOMER01} alt="Customer" width="36" />
                    </span>
                    <h5>
                      P004
                    </h5>
                  </div>
                  <span className={styles.customer_type}>
                    N
                  </span>
                </a>
              </li>
              <li className={`${styles.contempt}`}>
                <a>
                  <span className={styles.segments}>
                    <img src={Images.SEGMENT05} alt="Segments" width="16" />
                  </span>
                  <div className={styles.user}>
                    <span className={styles.profileimg}>
                      <img src={Images.CUSTOMER02} alt="Customer" width="36" />
                    </span>
                    <h5>
                      P005
                    </h5>
                  </div>
                  <span className={styles.customer_type}>
                    E
                  </span>
                </a>
              </li>
              <li className={`${styles.happy}`}>
                <a>
                  <span className={styles.segments}>
                    <img src={Images.SEGMENT06} alt="Segments" width="16" />
                  </span>
                  <div className={styles.user}>
                    <span className={styles.profileimg}>
                      <img src={Images.CUSTOMER03} alt="Customer" width="36" />
                    </span>
                    <h5>
                      P006
                    </h5>
                  </div>
                  <span className={styles.customer_type}>
                    N
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.customer_detail} ${styles.happy}`}>
            <header>
              <h3>P001</h3>
              <DateRangePickerComp />
            </header>
            <section className={`${styles.tab_container} custom_tab`}>
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="TODAY" value="1" />
                      <Tab label="HISTORY" value="2" />
                      <Tab label="PURCHASES" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <TodayReport />
                  </TabPanel>
                  <TabPanel value="2">
                    <History />
                  </TabPanel>
                  <TabPanel value="3">
                    <Purchases />
                  </TabPanel>
                </TabContext>
              </Box>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.dashboard_camera}>
        <h4>Camera</h4>
        <a className={styles.collapsable}>
          <img src={Images.COLLAPSE} alt="collapse" width="3" />
        </a>
        <ul className={styles.cameraList}>
          <li>
            <a>
              <img src={GIF004} alt="Camera01" />
              <span>CAM001</span>
            </a>
            <ul>
              <li className={styles.happy} style={{ height: '40%' }}><span>40%</span></li>
              <li className={styles.surprised} style={{ height: '20%' }}><span>20%</span></li>
              <li className={styles.confused} style={{ height: '20%' }}><span>20%</span></li>
              <li className={styles.disgusted} style={{ height: '10%' }}><span>10%</span></li>
              <li className={styles.contempt} style={{ height: '10%' }}><span>10%</span></li>
            </ul>
          </li>
          <li>
            <a>
              <img src={GIF002} alt="Camera02" />
              <span>CAM002</span>
            </a>
            <ul>
              <li className={styles.happy} style={{ height: '40%' }}><span>40%</span></li>
              <li className={styles.surprised} style={{ height: '20%' }}><span>20%</span></li>
              <li className={styles.confused} style={{ height: '20%' }}><span>20%</span></li>
              <li className={styles.disgusted} style={{ height: '10%' }}><span>10%</span></li>
              <li className={styles.contempt} style={{ height: '10%' }}><span>10%</span></li>
            </ul>
          </li>
          <li>
            <a>
              <img src={GIF005} alt="Camera03" />
              <span>CAM003</span>
            </a>
            <ul>
              <li className={styles.happy} style={{ height: '40%' }}><span>40%</span></li>
              <li className={styles.surprised} style={{ height: '20%' }}><span>20%</span></li>
              <li className={styles.confused} style={{ height: '20%' }}><span>20%</span></li>
              <li className={styles.disgusted} style={{ height: '10%' }}><span>10%</span></li>
              <li className={styles.contempt} style={{ height: '10%' }}><span>10%</span></li>
            </ul>
          </li>
          <li>
            <a>
              <img src={GIF001} alt="Camera04" />
              <span>CAM004</span>
            </a>
            <ul>
              <li className={styles.happy} style={{ height: '40%' }}><span>40%</span></li>
              <li className={styles.surprised} style={{ height: '20%' }}><span>20%</span></li>
              <li className={styles.confused} style={{ height: '20%' }}><span>20%</span></li>
              <li className={styles.disgusted} style={{ height: '10%' }}><span>10%</span></li>
              <li className={styles.contempt} style={{ height: '10%' }}><span>10%</span></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
