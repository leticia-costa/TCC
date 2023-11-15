import * as Notifications from 'expo-notifications';
import handleNotification, { Notification } from './handleNotification';

jest.mock('expo-notifications', () => ({
  ...jest.requireActual('expo-notifications'),
  scheduleNotificationAsync: jest.fn(),
}));

describe('handleNotification', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should schedule a notification with the correct parameters', async () => {
    const mockNotification: Notification = {
      title: 'Test Title',
      body: 'Test Body',
      hour: 8,
      minute: 0,
    };

    await handleNotification(mockNotification);

    expect(Notifications.scheduleNotificationAsync).toHaveBeenCalled();

    expect(Notifications.scheduleNotificationAsync).toHaveBeenCalledWith({
      content: {
        title: 'Test Title',
        body: 'Test Body',
      },
      trigger: {
        hour: 8,
        minute: 0,
        repeats: true,
      },
    });
  });
});
