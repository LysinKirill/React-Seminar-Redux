import { RootState } from '../../app/store';

export const selectUsers = (state: RootState) => state.users.users;

export const selectUserById = (id: number) => (state: RootState) =>
    state.users.users.find((user: { id: number; }) => user.id === id);
