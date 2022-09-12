import { notification } from "antd";

export const showNotification = (messages, types) => {
  notification.open({
    message: types,
    type: types,
    duration: 3,
    description: messages,
  });
};
