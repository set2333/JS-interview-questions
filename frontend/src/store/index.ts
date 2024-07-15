import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { questionsApi } from './services/questions';

const currentQuestion = createSlice({
  name: 'currentQuestion',
  initialState: {
    currentQuestion: '',
    currentQuestionType: '',
  },
  reducers: {
    setCurrentQuestion: (state, action: PayloadAction<string>) => {
      state.currentQuestion = action.payload;
    },
    setCurrentQuestionType: (state, action: PayloadAction<string>) => {
      state.currentQuestionType = action.payload;
    },
  },
});

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    [currentQuestion.name]: currentQuestion.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([questionsApi.middleware]),
});

export const ACTIONS = { ...currentQuestion.actions };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
