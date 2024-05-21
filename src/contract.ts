import type {
  LocationAccuracy,
  LocationAccuracyOptions,
  NotificationOption,
  NotificationsResponse,
  Permission,
  PermissionStatus,
  Rationale,
} from './types';

export type Contract = {
  check(permission: Permission): PermissionStatus;
  checkLocationAccuracy(): Promise<LocationAccuracy>;
  checkMultiple<P extends Permission[]>(permissions: P): Record<P[number], PermissionStatus>;
  checkNotifications(): Promise<NotificationsResponse>;
  openPhotoPicker(): Promise<void>;
  openSettings(): Promise<void>;
  request(permission: Permission, rationale?: Rationale): Promise<PermissionStatus>;
  requestLocationAccuracy(options: LocationAccuracyOptions): Promise<LocationAccuracy>;
  requestMultiple<P extends Permission[]>(
    permissions: P,
  ): Promise<Record<P[number], PermissionStatus>>;
  requestNotifications(
    options: NotificationOption[],
    rationale?: Rationale,
  ): Promise<NotificationsResponse>;
};
