import { notifications } from "@mantine/notifications";
import { IconCheck } from '@tabler/icons-react';

export const WorkNotification = () => {
   
        notifications.show({
            id: 'load-data',
            loading: true,
            title: 'Loading your work data',
            message: 'Data will be loaded in 2 seconds, you cannot close this yet',
            autoClose: false,
            withCloseButton: false,
          });
      
          setTimeout(() => {
            notifications.update({
              id: 'load-data',
              color: 'teal',
              title: 'Data was loaded',
              message: 'Notification will close in 2 seconds, you can close this notification now',
              icon: <IconCheck size="1rem" />,
              autoClose: 2000,
            });
          }, 3000);
          
      
}