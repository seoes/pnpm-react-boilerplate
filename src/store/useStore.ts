import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { useMemo } from "react";

function initializeStore() {
    return configureStore({ reducer: rootReducer });
}
export function useStore() {
    return useMemo(() => initializeStore(), []);
}
