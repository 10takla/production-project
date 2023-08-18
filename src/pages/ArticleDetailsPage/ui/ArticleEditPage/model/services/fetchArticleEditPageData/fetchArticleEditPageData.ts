import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleEditPage } from '../../types/articleEditPage';

export const fetchArticleEditPageData = createAsyncThunk<
    ArticleEditPage,
    string,
    ThunkConfig<string>
>(
    'articleEditPage/fetchArticleEditPageData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.get<ArticleEditPage>('/articleEditPage');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
