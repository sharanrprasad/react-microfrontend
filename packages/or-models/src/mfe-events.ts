export interface UserProfileUpdatedEventData {
  isComplete: boolean;
}

export type UserProfileUpdatedCustomEvent =
  CustomEvent<UserProfileUpdatedEventData>;

export const MfeEvents = {
  USER_UPDATED_EVENT: "USER_UPDATED_EVENT",
};
