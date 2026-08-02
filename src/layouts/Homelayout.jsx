import React from "react";
import Header from "../components/Header";
import Latestnews from "../components/Latestnews";
import Navbar from "../components/Navbar";
import Leftaside from "../components/Homelayouts/Leftaside";
import { Outlet, useNavigate } from "react-router";
import Rightaside from "../components/Homelayouts/Rightaside";
import Loading from "../components/Loading";

function Homelayout() {
    const navigate = useNavigate();
    return (
        <div>
            <header>
                <Header></Header>
                <Latestnews></Latestnews>
                <Navbar></Navbar>
            </header>
            <main className="md:grid md:grid-cols-9 md:grid-rows-2 lg:grid-cols-12 w-11/12 mx-auto gap-5 items-start">
                <aside className="md:col-span-3 ">
                    <Leftaside></Leftaside>
                </aside>
                <section className="main-section md:col-span-6 md:row-span-2 lg:col-span-6">
                    {navigate.state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside className="lg:col-span-3 md:col-span-3">
                    <Rightaside></Rightaside>
                </aside>

            </main>
        </div>
    )
}

export default Homelayout;