import { createListenerMiddleware } from "@reduxjs/toolkit";
import { changeForm, updateAction } from "./reducers";


const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    actionCreator: changeForm,
    effect: async (action, listenerApi) => {
        listenerApi.dispatch(updateAction(action.payload))
    }
})

export default listenerMiddleware;