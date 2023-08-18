export {
    ArticleEditPageSchema,
} from './model/types/articleEditPage';

export {
    articleEditPageActions,
    articleEditPageReducer,
} from './model/slice/articleEditPageSlice';

export {
    fetchArticleEditPageData,
} from './model/services/fetchArticleEditPageData/fetchArticleEditPageData';

export {
    ArticleEditPageAsync as ArticleEditPage,
} from './ui/ArticleEditPage/ArticleEditPage.async';
