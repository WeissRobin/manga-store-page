import { useEffect, useState } from 'react';

import mangaVideoDesktop from '../assets/manga-avatars-desktop.mp4';
import mangaVideoMobile from '../assets/manga-avatars-mobile.mp4';

const MangaVideo = () => {

    const [Video, setVideo] = useState(
        window.innerWidth < 600 ? mangaVideoMobile : mangaVideoDesktop
    );

    useEffect(() => {
        const mangaVideo = document.getElementById('manga-video');
        
        mangaVideo.src = Video;

        const handleResize = () => {
            if(window.innerWidth < 740) {
                setVideo(mangaVideoMobile);
                mangaVideo.src = Video;
            } else {
                setVideo(mangaVideoDesktop);
                mangaVideo.src = Video;
            }
        }

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [Video]);

    return (
        <div className='relative flex items-center justify-center w-full border-b border-black'>
            <video autoPlay loop muted id='manga-video' className='h-[100vh] mx-auto'></video>
        </div>
    )
}

export default MangaVideo