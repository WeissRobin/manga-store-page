import MangaVideo from "./MangaVideo";

import { Link } from "react-router-dom";

function Hero() {

    const handleAimEffect = (e) => {
        const topBorder = document.getElementById('topBorder');
        const botBorder = document.getElementById('botBorder');
        
        const Top = e.target.offsetTop;
        const Height = e.target.offsetHeight;

        topBorder.style.top =  Top + 'px';
        botBorder.style.top = Top + Height + 'px';
    }

    return (
        <div className='flex'>
            <MangaVideo></MangaVideo>
            <div className='absolute top-1/4 bg-black bg-opacity-70 w-full'>
                <div className='text-center'>
                    <h1 className='font-sans-japan text-[2.5rem] md:text-[6vw] xl:md:text-[9vw] 2xl:text-[13rem] font-light text-white'>日本 • マンガ</h1>
                    <h2 className='font-sans-japan text-[1.5rem] md:text-[4vw] xl:md:text-[7vw] 2xl:text-[10rem] text-white font-extrabold'>Nihon Manga</h2>
                </div>
            </div>
        </div>
     );
}

export default Hero;