// Базовые скрипты
import React from 'react';
import { useParams } from 'react-router-dom';

function Article() {

    // Получить параметр ссылки
    const { name } = useParams();

    return (
        <main>
            Article: {name}
        </main>
    );
}

export default Article;