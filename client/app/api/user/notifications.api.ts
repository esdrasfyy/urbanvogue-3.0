import { AxiosResponse } from "axios";
import { api } from "../../libs/axios.lib";
import { getNotificationsApiResponse, updateNotificationsProps} from "../api";

async function getNotifications({user_id}:{user_id: number}): Promise<getNotificationsApiResponse> {

  try {
    if (!user_id) {
      throw new Error("user_id parameter is empty or undefined.");
    }
    const response: AxiosResponse = await api.get(
      `${api}user/notifications?id=${user_id}`
    );

    return { ...response.data, status: response.status };

  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
}

async function updateNotifications({ids, action}: updateNotificationsProps): Promise<number> {
  try {
    if (!ids) {
      throw new Error("user_id parameter is empty or undefined.");
    }
    
    const response: AxiosResponse = await api.post(`user/notifications/update`, {
        ids,
        action,
      });

    return response.status
    
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error("Unknown error occurred");
    }
  }
}

export const Notifications = { getNotifications, updateNotifications };
