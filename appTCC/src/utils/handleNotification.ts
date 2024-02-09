import * as Notifications from "expo-notifications";

export interface Notification {
  title: string;
  body: string;
  hour: number;
  minute: number;
}

const handleNotification = async (
  notification: Notification
): Promise<void> => {
  const { title, body, hour, minute } = notification;

  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: {
      hour,
      minute,
      repeats: true,
    },
  });
};

export default handleNotification;
