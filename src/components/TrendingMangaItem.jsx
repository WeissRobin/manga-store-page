function TrendingMangaItem({ img }) {
    return ( 
        <div className='transition-all hover:scale-[102%]'>
            <img src={img} alt={`${img} + Image`} className='max-w-[180px] h-[260px] xl:max-w-[620px] xl:h-[700px] shadow-[0_8px_30px_rgb(0,0,0,0.4)]' draggable={false}/>
        </div>
     );
}

export default TrendingMangaItem;