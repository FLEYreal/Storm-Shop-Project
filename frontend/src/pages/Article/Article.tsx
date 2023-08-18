import React from 'react';
import { useParams } from 'react-router-dom';

function Article() {
    const { name } = useParams();

    return (
        <main>
            Article: {name}
        </main>
    );
}

export default Article;