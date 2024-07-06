function NewMangaItem({ img, state }) {
    return ( 
        <div className='cursor-pointer relative transition-all'>
            <img src={img} alt={`${img} + Image`} className='relative z-[9] max-w-[240px] h-[320px] xl:max-w-[620px] xl:h-[700px] shadow-[0_8px_30px_rgb(0,0,0,0.4)]' draggable={false}/>
            <img src={img} alt={`${img} + Image`} className={`absolute translate-all duration-500 top-0 left-0 max-w-[240px] h-[320px] xl:max-w-[620px] xl:h-[700px] ${state ? 'animate-layer-down' : ''}`} draggable={false}/>
        </div>
     );
}

export default NewMangaItem;