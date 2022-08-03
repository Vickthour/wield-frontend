import React from 'react'
import { MoreOptions } from '..';
import { ArrowAngled } from '../../icons';
import SettingHeader from '../../layouts/settingHeader'

const PrivacySettingTab = () => {
  return (
    <SettingHeader
      title="Privacy and Security"
      p="Manage how you access your account and what you can see on Wield"
    >
      <MoreOptions name="Two-factor authentication" />
      <MoreOptions name="Activities (Who can see your posts)" />
      <MoreOptions name="Blocked"/>
      <MoreOptions name="Privacy Policy" icon={<ArrowAngled/>}/>
    </SettingHeader>
  );
}

export default PrivacySettingTab