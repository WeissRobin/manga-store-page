import { useState, useEffect } from "react";
import axios from "axios";

import manga_1 from '../assets/trending-manga/manga-1.jpg';
import manga_2 from '../assets/trending-manga/manga-2.png';
import manga_3 from '../assets/trending-manga/manga-3.jpg';
import manga_4 from '../assets/trending-manga/manga-4.jpg';
import manga_5 from '../assets/trending-manga/manga-5.jpg';
import manga_6 from '../assets/trending-manga/manga-6.jpg';
import manga_7 from '../assets/trending-manga/manga-7.png';
import manga_8 from '../assets/trending-manga/manga-8.jpg';

import NewMangaItem from "./NewMangaItem";

function NewManga() {

    const [Manga, setManga] = useState([manga_1, manga_2, manga_3, manga_4, manga_5, manga_6, manga_7, manga_8]);

    const [startPoint, setStartPoint] = useState(0);
    const [percentage, setPercentage] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [nextPercentage, setNextPercentage] = useState(0);
    const [trackerPercentage, setTrackerPercentage] = useState(0);
    const [Animation, setAnimation] = useState(false);
    const [AnimationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.querySelector('.trending-title').addEventListener('animationend', () => {
            setAnimationComplete(true);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[]);

    const handleMouseDown = (e) => {
        setStartPoint(e.clientX);
    }

    const handleMouseMove = (e) => {
        if (startPoint === 0) return;
        const trendingManga = document.querySelector('.trending-manga');

        const mouseDelta = startPoint - e.clientX;
        const maxDelta = window.innerWidth / 15;
    
        setPercentage((mouseDelta / maxDelta) * (-100));

        const nextPercentageUnconstrained = prevPercentage + percentage;

        setNextPercentage(Math.max(Math.min(nextPercentageUnconstrained, 0), -3100));
        setTrackerPercentage(nextPercentage);
        
        trendingManga.style.transform= `translate(${nextPercentage}px, 0px)`;
    }

    const handleMouseUp = () => {
        setStartPoint(0);
        setPrevPercentage(trackerPercentage);
    }

    const handleScroll = () => {
        if (window.scrollY >= 700) {
            setAnimation(true);
        } 
    }

    function isMobile() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return /android|iphone|ipad|ipod|opera mini|iemobile|windows phone|blackberry|mobile|silk|puffin|kindle|webos|hp-tablet|bada/i.test(userAgent);
    }
    
    if (isMobile()) {
        return ( 
            <section className='relative h-[93vh] items-center py-4'>
                <h2 className='pl-4 text-5xl font-bold xl:text-[20rem] pointer-events-none trending-title'>New Titles</h2>
                <div className='relative z-10 grid grid-flow-col auto-cols-25percent max-w-[750px] gap-10 overflow-auto px-8 py-16 trending-manga'>
                    {
                        Manga.map((manga, index) => (
                            <NewMangaItem key={index} img={manga}></NewMangaItem>
                        ))
                    }
                </div>
            </section>
        );
    } else {
        return ( 
            <section className='bg-white relative h-[100vh] flex items-center'>
                <h2 className={`absolute top-1/2 -translate-y-1/2 z-[12] left-0 text-7xl font-bold xl:text-[20rem] pointer-events-none trending-title ${Animation ? 'animate-low-index' : ''}`}>New Titles</h2>
                <div className='relative grid grid-flow-col auto-cols-25percent max-w-[750px] gap-20 py-16 left-1/4 trending-manga' onMouseDown={AnimationComplete ? handleMouseDown : undefined} onMouseMove={AnimationComplete ? handleMouseMove : undefined} onMouseUp={AnimationComplete ? handleMouseUp : undefined}>
                    {
                        Manga.map((manga, index) => (
                            <NewMangaItem key={index} img={manga} state={Animation}></NewMangaItem>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default NewManga;