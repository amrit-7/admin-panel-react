import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { CurrentUserReducer, setCurrentUser } from "./slices/CurrentUserSlice";
import { TutorsAPI } from "./apis/tutorapi";
import { SubjectsAPI } from "./apis/subjectsapi";
const rootReducer = combineReducers({
  currentUser: CurrentUserReducer,
  [TutorsAPI.reducerPath]: TutorsAPI.reducer,
  [SubjectsAPI.reducerPath]: SubjectsAPI.reducer,
});
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["currentUser"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(TutorsAPI.middleware)
      .concat(SubjectsAPI.middleware),
});

export {
  useFetchAllTutorsQuery,
  useFetchTutorByIdQuery,
} from "./apis/tutorapi";
export {
  useAddNewSubjectMutation,
  useFetchAllSubjectsQuery,
  useDeleteSubjectMutation,
  useUpdateSubjectMutation,
} from "./apis/subjectsapi";
export const persistor = persistStore(store);
export { store, setCurrentUser };
