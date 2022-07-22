import React from 'react'
import Activities from '../../components/inc/Activities';
import AppBody from '../../components/inc/AppBody';
import AppNav from '../../components/inc/AppNav';
import ButtomNav from '../../components/inc/ButtomNav';
import LeftPane from '../../components/inc/LeftPane';
import MainPane from '../../components/inc/MainPane';
import RightPane from '../../components/inc/RightPane';

const activities = () => {
  return (
    <>
      <AppNav />
      <AppBody grid>

        <LeftPane />
        <MainPane>
            <Activities main/>
        </MainPane>
        <RightPane hide="activities" />
      </AppBody>
      <ButtomNav />
    </>
  );
}

export default activities