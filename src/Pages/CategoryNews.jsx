import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

function CategoryNews(){
    const [categorynews, setCategoryNews] = useState([]);
    const {id} = useParams();
    const data = useLoaderData();
    
    useEffect(()=>{
        if (id == '0') {
            setCategoryNews(data);
            return;
        } else if (id == '1') {
            const filterednews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filterednews);
        } else {
            const filterednews = data.filter(news => news.category_id == id);
            setCategoryNews(filterednews);
        }
    },[data, id]);
    console.log(id, categorynews);

    return(
        <div>
            <h2 className="font-bold mb-5">Dragon News- {categorynews.length}</h2>
            <div className="grid grid-cols-1 gap-5">
                {
                    categorynews.map(news => <NewsCard key={news.id} news={news} ></NewsCard>)
                }
            </div>
        </div>
    )
}

export default CategoryNews;