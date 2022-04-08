export type UserInfoReducerType = {
    name: string;
};

export type SetUserNameActionType = {
    type: string;
    payload: string;
};

export type ActionType = SetUserNameActionType;
