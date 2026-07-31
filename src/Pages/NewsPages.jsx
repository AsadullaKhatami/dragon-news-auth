import React from "react";
import Header from "../components/Header";
import Rightaside from "../components/Homelayouts/Rightaside";
import { Link, useLoaderData, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const NewsPages = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const { thumbnail_url, title, details, category_id } = data.find(news => news.id == id);
    // console.log(id);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="md:grid md:grid-cols-12 gap-5 w-11/12 mx-auto">
                <section className="newslater col-span-9">
                    <p className="font-bold pb-5">Drogon News</p>
                    <div className="space-y-5">
                        <img src={thumbnail_url} alt="" />
                        <h1 className="text-3xl font-semibold">{title}</h1>
                        <p>{details}</p>
                    </div>
                    <Link className="btn btn-secondary p-2 px-3 mt-5" to={`/category/${category_id}`}><FaArrowLeft /> All news in this category</Link>
                </section>
                <section className="rightside md:col-span-3">
                    <Rightaside></Rightaside>
                </section>
            </main>
        </div>
    )
}

export default NewsPages;