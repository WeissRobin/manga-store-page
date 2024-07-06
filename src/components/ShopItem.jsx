function ShopItem({ img }) {
    return ( 
        <div className='p-[10%] border-b border-black'>
            <img className='px-10 w-[100%] h-[100%] object-cover shadow-[0_8px_30px_rgb(0,0,0,0.4)]' src={img} alt='Shop Image' />
        </div>
     );
}

export default ShopItem;