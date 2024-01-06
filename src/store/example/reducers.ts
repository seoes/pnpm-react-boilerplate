import * as T from "./types";

const initialState: T.State = 800;

export const reducer = (state: T.State = initialState, action: T.Actions) => {
    switch (action.type) {
        case "@example/sample":
            return action.payload;
    }
    return state;
};
