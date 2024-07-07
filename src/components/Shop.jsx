import { useState, useEffect } from "react";

import axios from "axios";
import ShopItem from "./ShopItem";
import Pagination from "./Pagination";
import Filters from "./Filters";

function Shop() {
    
    const [Manga, setManga] = useState([]);
    const [Skip, setSkip] = useState(10);
    const [sumManga, setSumManga] = useState(0);

    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/manga')
        .then(data => data.data)
        .then(data => {
            const sumManga = data.data.length;
            const shopItems = data.data.slice(Skip - 10, Skip);
            setManga(shopItems);
            setSumManga(sumManga);
        });
    }, [Skip]);

    const handleActivePage = (activePage) => {
        if(activePage === 1) {
            setSkip(10);
        } else {
            setSkip(activePage * 10);
        }
    }

    return ( 
        <section className='manga-shop md:grid md:grid-cols-20/80'>
            <div className='md:col-start-2 flex flex-col'>
                <div className='grid grid-cols-2 lg:grid-cols-3 border-t border-black [&>*:nth-child(odd)]:border-r lg:[&>*:nth-child(even)]:border-r'>
                    {
                        Manga.map((manga) =>(
                            <ShopItem key={manga.mal_id} img={manga.images.webp.image_url}></ShopItem>
                        ))
                    }
                </div>
                <Pagination handleSkipChange={handleActivePage} totalPages={Math.round(sumManga / 10)}></Pagination>
            </div>
            <Filters></Filters>
        </section> 
    )
}

export default Shop;