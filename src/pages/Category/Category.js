import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../shared/NewsSummary/NewsSummary';

const Category = () => {

    const newsCategory = useLoaderData();
    return (
        <div>
            <h2>this is a category :{newsCategory.length}</h2>

            {
                newsCategory.map(news => <NewsSummary
                    key={news._id}
                    news={news}
                ></NewsSummary>)
            }
        </div>
    );
};

export default Category;