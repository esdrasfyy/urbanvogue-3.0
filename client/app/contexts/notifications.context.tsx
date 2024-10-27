import React, { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useUser } from "./user.context";
import { Notifications } from "../api/user/notifications.api";
import { Contexts } from "../entities/contexts.entitie";

export const ContextNotification = createContext<Contexts.NotificationProps | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Account.UserNotificationsI[] | null>(null);

  const { user } = useUser();

  const fetchNotifications = async (user_id: number) => {
    try {
      const { notifications, status } = await Notifications.getNotifications({ user_id });

      if (status === 200 && notifications) {
        setNotifications(notifications);
      }
    } catch {
      return;
    }
  };

  useEffect(() => {
    if (user && user.user_id) {
      fetchNotifications(user.user_id);
    }
  }, [user]);

  const NotificationsRead: (ids: number[], action: "read" | "noRead") => Promise<void> = async (ids, action) => {
    const status = await Notifications.updateNotifications({ ids, action });

    if (status === 200) {
      const updatedNotifications = notifications?.map((notification: Account.UserNotificationsI) => {
        if (ids.includes(notification.notify_id)) {
          return {
            ...notification,
            read: action === "read",
          };
        }
        return notification;
      });
      setNotifications(updatedNotifications || null);
    }
  };

  const NotificationsDelete: (ids: number[]) => Promise<void> = async (ids) => {
    const status = await Notifications.updateNotifications({ ids, action: "delete" });

    if (status === 200) {
      const updatedNotifications = notifications?.filter((notification: Account.UserNotificationsI) => !ids.includes(notification.notify_id));

      setNotifications(updatedNotifications || null);
    }
  };

  const disclosure = useDisclosure();
  const contextValue: Contexts.NotificationProps = {
    disclosure,
    notifications,
    setNotifications,
    NotificationsRead,
    NotificationsDelete,
  };

  return <ContextNotification.Provider value={contextValue}>{children}</ContextNotification.Provider>;
};

export const useNotifications = () => {
  const context = useContext(ContextNotification);
  if (!context) {
    throw new Error("useNotifications must be used within a NotificationsProvider");
  }
  return context;
};
