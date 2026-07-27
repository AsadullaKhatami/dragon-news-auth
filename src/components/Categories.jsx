import React, { use } from "react";
import { NavLink } from "react-router";

const caterogyPromis = fetch('/categories.json').then(res => res.json());

function Categories(){
    const category = use(caterogyPromis);
    return(
        <div>
            <h2>All Caterogy ({category.length})</h2>
            <div className="grid grid-cols-1 gap-1 md:ml-10 ml-3">
                {
                    category.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}>{cat.name}</NavLink>)
                }
            </div>
        </div>
    )
}

export default Categories;