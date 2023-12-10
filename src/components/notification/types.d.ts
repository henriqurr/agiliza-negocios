export type NotificationtState = 'success' | 'error' | 'warning' | 'hidden' | null;
export type NotificationtPosition = 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
    position?: NotificationtPosition;
    state?: NotificationtState;
}