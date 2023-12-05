import React from "react";
import cls from "./FirstPage.module.scss";
import { FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const FirstPage = () => {
  return (
    <div className={cls.FirstPage}>
      <FloatButton
        icon={<QuestionCircleOutlined />}
        shape="circle"
        trigger="hover"
        type="primary"
        tooltip={<div>Documents</div>}
        className={cls.QuestButton}
      />
    </div>
  );
};

export default FirstPage;
