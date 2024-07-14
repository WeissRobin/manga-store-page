function NewMangaItem({ img, state }) {
    return ( 
        <div className='cursor-pointer relative transition-all'>
            <img src={img} alt={`${img} + Image`} className='relative z-[9] w-[100%] h-[100%] shadow-[0_8px_30px_rgb(0,0,0,0.4)] max-w-[900px]' draggable={false}/>
            <img src={img} alt={`${img} + Image`} className={`absolute translate-all duration-500 top-0 left-0 w-[100%] h-[100%] max-w-[900px] ${state ? 'animate-layer-down' : ''}`} draggable={false}/>        
        </div>
     );
}

export default NewMangaItem;