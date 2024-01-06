import { Action } from "redux";

export type State = number;

export type SampleAction = Action<"@example/sample"> & {
    payload: State;
};

export type Actions = SampleAction;
