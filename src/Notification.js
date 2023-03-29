import { Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
 
const Notification = (title, message, duration, type='success', container='top-right' ) => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: container,
    dismiss: {
      duration: duration,
    }
  });
}

export default Notification