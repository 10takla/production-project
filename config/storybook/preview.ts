import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/storybook/styleDecorator/styleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { RouteDecorator } from 'shared/config/storybook/routeDecorator/routeDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        RouteDecorator,
    ],
};

export default preview;
