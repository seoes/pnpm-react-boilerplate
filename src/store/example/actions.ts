import type * as T from "./types";

export const sample = (payload: number): T.SampleAction => ({
    type: "@example/sample",
    payload,
});
