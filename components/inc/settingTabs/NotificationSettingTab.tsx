import React from "react";
import { Switch } from "../../base";
import SettingHeader from "../../layouts/settingHeader";

function NotificationSettingTab() {
  const [checked, setChecked] = React.useState({
    notification: false,
    postsOnly: false,
    promotionsOnly: false,
    connectionsOnly: false,
    sound: false,
    vibration: false,
  });
  return (
    <SettingHeader
      title="Notifications"
      p="Manage how you access your account and what you can see on Wield"
    >
      <div className="flex flex-col gap-4">
          {plc.map(({ name,stateId, label }, index) => {
            return (
              <div key={index} className="flex items-center justify-between">
                <p className="ml-2 font-medium">{name}</p>
                <div className="flex items-center gap-0.5">
                    <p>{checked[stateId]?'on':'off'}</p>
                    <Switch
                      label={label}
                      checked={checked[stateId]}
                      onChange={() =>
                        setChecked({ ...checked, [stateId]: !checked[stateId] })
                      }
                    />
                </div>
              </div>
            );
          })}
      </div>
    </SettingHeader>
  );
}

interface plc{
    label:string,
    name:string
    stateId:"notification"|"postsOnly"|"promotionsOnly"|"connectionsOnly"|"sound"|"vibration"
}
const plc:plc[] = [
  {
    stateId: "notification",
    name:"Notification",
    label: "turn on/off notification",
  },
  {
    stateId: "postsOnly",
    label: "Posts only",
    name:"Posts only",
  },
  {
    stateId: "promotionsOnly",
    label: "Promotions only",
    name:"Promotions only",
  },
  {
    stateId: "connectionsOnly",
    label: "Connections only",
    name:"Connections only",
},
  {
    stateId: "sound",
    label: "turn on/off Sound",
    name:"Sound",
},
  {
    stateId: "vibration",
    label: "turn on/off Vibration",
    name:"Vibration",
},
];
export default NotificationSettingTab;
