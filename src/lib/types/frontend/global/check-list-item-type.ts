import { CheckListItemStatusEnum } from "@Lib/enums/components/check-list-item-status";

/**
 * Membership check list type
 */
export type CheckListItemType = {
  title: string;
  description?: string;
  status?: {
    status: CheckListItemStatusEnum;
    responseDate: Date;
    responseDescription?: string;
  };
  code: string;
};
