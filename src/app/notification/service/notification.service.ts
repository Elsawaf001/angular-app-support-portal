import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {NotificationType} from "./notification-type";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifier: ToastrService) {
  }

  public notify(type: NotificationType, message: string) {
    switch (type) {
      case NotificationType.error:
        this.notifier.error(message);
        break;
      case NotificationType.success:
        this.notifier.success(message);
        break;
      case NotificationType.warning:
        this.notifier.warning(message);
        break;
      case NotificationType.info:
        this.notifier.info(message);
        break

      default :
        this.notifier.show(message)
    }

  }
}


