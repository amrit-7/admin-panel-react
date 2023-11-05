import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { CurrentUserReducer, setCurrentUser } from "./slices/CurrentUserSlice";
import { TutorsAPI } from "./apis/tutorapi";
import { SubjectsAPI } from "./apis/subjectsapi";
import { OptionsAPI } from "./apis/optionsapi";
const rootReducer = combineReducers({
  currentUser: CurrentUserReducer,
  [TutorsAPI.reducerPath]: TutorsAPI.reducer,
  [SubjectsAPI.reducerPath]: SubjectsAPI.reducer,
  [OptionsAPI.reducerPath]: OptionsAPI.reducer,
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
      .concat(SubjectsAPI.middleware)
      .concat(OptionsAPI.middleware),
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
export {
  useAddNewOptionMutation,
  useFetchAllOptionsQuery,
  useAddNewCategoryMutation,
  useFetchParentOptionsQuery,
} from "./apis/optionsapi";
export const persistor = persistStore(store);
export { store, setCurrentUser };
