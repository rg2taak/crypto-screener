import { NotifyMessageTypeEnum } from "@Lib/enums/frontend/notify-message-type-enum";
import { BuefyNamespace } from "buefy";
import { BNoticeComponent } from "buefy/types/components";

/**
 * Notify helper class
 */
export default class NotifyModule {
  /**
   * Show raw notify
   * @param msg srting Message
   * @param msgType NotifyMessageTypeEnum msgType
   */
  public static notify(
    sender: BuefyNamespace,
    msg: string,
    msgType: NotifyMessageTypeEnum,
  ): BNoticeComponent {
    const notifyId = sender.notification.open({
      duration: 5000,
      message: msg,
      position: "is-bottom-right",
      type: msgType,
      hasIcon: true,
    });

    return notifyId;
  }

  /**
   * Show information notify
   * @param msg string Mesasge
   */
  public static showInfo(
    sender: BuefyNamespace,
    msg: string,
  ): BNoticeComponent {
    return NotifyModule.notify(sender, msg, NotifyMessageTypeEnum.Info);
  }

  /**
   * Show danger notify
   * @param msg string Mesasge
   */
  public static showDanger(
    sender: BuefyNamespace,
    msg: string,
  ): BNoticeComponent {
    return NotifyModule.notify(sender, msg, NotifyMessageTypeEnum.Danger);
  }

  /**
   * Show danger success
   * @param msg string Mesasge
   */
  public static showSuccess(
    sender: BuefyNamespace,
    msg: string,
  ): BNoticeComponent {
    return NotifyModule.notify(sender, msg, NotifyMessageTypeEnum.Success);
  }

  /**
   * Show warning success
   * @param msg string Mesasge
   */
  public static showWarning(
    sender: BuefyNamespace,
    msg: string,
  ): BNoticeComponent {
    return NotifyModule.notify(sender, msg, NotifyMessageTypeEnum.Warning);
  }
}
