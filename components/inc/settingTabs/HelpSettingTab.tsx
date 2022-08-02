import React from 'react'
import SettingHeader from '../../layouts/settingHeader'
import MoreOptions from '../MoreOptions'

 const HelpSettingTab = () => {
  return (
    <SettingHeader
    title='Help'>
        <MoreOptions name='Chat with us'/>
        <MoreOptions name='Call us'/>
        <MoreOptions name='Send an Email'/>
    </SettingHeader>

  )
}
export default HelpSettingTab
