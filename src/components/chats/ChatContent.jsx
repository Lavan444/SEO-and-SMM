import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import ChatsUsers from "./ChatsUsers";
import ProfileSetting from "../setting/ProfileSetting";

const ChatContent = () => {
  return (
    <div className="content-area">
      <PerfectScrollbar>
        <ProfileSetting />
      </PerfectScrollbar>
    </div>
  );
};

export default ChatContent;