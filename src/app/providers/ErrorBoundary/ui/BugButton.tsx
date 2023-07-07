import { Button } from 'shared/ui/Button/Button';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Кнопка для тестирования
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = useCallback(() => {
        setError(true);
    }, []);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('throw error')}
        </Button>
    );
};
