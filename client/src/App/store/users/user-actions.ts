import {Dispatch} from "@reduxjs/toolkit";
import agent from "../../api/agent";
import {UserForm} from "../../viewmodels/userVM";
import {userActions} from "./user-slice";

// setup user actions here
export const login = (creds: UserForm) => {
    return async (dispatch: Dispatch) => {
        const loginRequest = async (creds: UserForm) => {
            const user = await agent.Account.login(creds);

            if (!user) {
                throw new Error("Something went wrong");
            }
            return user;
        };

        const user = await loginRequest(creds);

        console.log(user);
        dispatch(userActions.setIsLoggedIn());
    };
};

export const register = (creds: UserForm) => {
    return async (dispatch: Dispatch) => {
        const registerRequest = async (creds: UserForm) => {
            const user = await agent.Account.register(creds);

            if (!user) {
                throw new Error("Something went wrong in registration!");
            }
            return user;
        };

        const user = await registerRequest(creds);

        console.log(user);
        dispatch(userActions.setIsLoggedIn());
    }
};
