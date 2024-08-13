import React from 'react';
import { Outlet } from 'react-router';
import styles from './layout.module.scss';
import SideNavbar from '../sidebar/sidebar';
import AppHeader from '../header/header';

function AppLayout() {
  return (
    <div className={styles.app_wrapper}>
      <div className={styles.sidebar}>
        <SideNavbar />
      </div>
      <div className={styles.mainContainer}>
        <header className={styles.navbar}>
          <AppHeader />
        </header>
        <section className={styles.mainWrapper}>
          <Outlet />
          {/* <Dashboard /> */}
        </section>
      </div>
    </div>
  );
}

export default AppLayout;
