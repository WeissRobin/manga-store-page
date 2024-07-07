import { useState } from "react";

function ShopItem({ img }) {
    
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleTransform = (e) => {
        const elementBounding = e.target.getBoundingClientRect();

        // Výpočet relativní polohy myši k prvku
        const mouseX = e.clientX - elementBounding.left;
        const mouseY = e.clientY - elementBounding.top;

        // Transformace souřadnic pro pravý horní roh jako +4, +4
        const newRotateY = ((mouseX / elementBounding.width) * 20) - 10; // Mění se od -4 do 4
        const newRotateX = ((mouseY / elementBounding.height) * 20) - 10; // Mění se od -4 do 4

        setX(newRotateX);
        setY(newRotateY);
    }

    return ( 
        <div className='border-b border-black aspect-square transform-style: preserve-3d;' onMouseMove={handleTransform} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <a href='' className='p-[10%] block w-[100%] h-[100%] bg-white'>
            <div className='w-[100%] h-[100%]' 
            style={{
                    transform: `${isHovered ? `rotateX(${-X}deg) rotateY(${Y}deg) scale(1.05)` : ''}`,
                    transition: 'transform 0.1s ease-out',
                }}>
                <img className='w-[100%] h-[100%] object-contain object-center manga-shop-item'
                src={img} alt='Shop Image'/>
            </div>
            </a>
        </div>
     );
}

export default ShopItem;