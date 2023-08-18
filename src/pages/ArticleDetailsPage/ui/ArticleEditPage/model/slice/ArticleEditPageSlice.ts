import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleEditPage, ArticleEditPageSchema } from '../types/articleEditPage';
import { fetchArticleEditPageData } from '../services/fetchArticleEditPageData/fetchArticleEditPageData';

const initialState: ArticleEditPageSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleEditPageSlice = createSlice({
    name: 'articleEditPage',
    initialState,
    reducers: {
        setArticleEditPage: (state, action: PayloadAction<ArticleEditPage>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleEditPageData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleEditPageData.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleEditPageData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleEditPageActions } = articleEditPageSlice;
export const { reducer: articleEditPageReducer } = articleEditPageSlice;
