export interface UserNotificationsI {
    notify_id: number;
    user_id: number;
    title: string;
    message: string;
    redirect: string;
    read: boolean;
    createdAt: Date;
}
