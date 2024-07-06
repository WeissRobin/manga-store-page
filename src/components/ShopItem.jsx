function ShopItem({ img }) {
    return ( 
        <div className='px-8 py-5 border-b border-black'>
            <img className='w-[100%] h-[100%] object-cover shadow-[0_8px_30px_rgb(0,0,0,0.4)]' src={img} alt='Shop Image' />
        </div>
     );
}

export default ShopItem;