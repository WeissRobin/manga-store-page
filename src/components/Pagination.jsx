import { useState } from "react";

function Pagination({ totalPages, handleSkipChange }) {

    const arrPages = Array.from({ length: totalPages }, (_, index) => index + 1);
    
    const [activePage, setActivePage] = useState(1);

    const prevPage = activePage > 1 ? activePage - 1 : null;
    const nextPage = activePage < totalPages ? activePage + 1 : null;

    const handlePageChange = (page) => {
        setActivePage(page);
        handleSkipChange(page);

        const mangaShop = document.querySelector('.manga-shop');
        window.scrollTo({
            top: mangaShop.offsetHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className='flex justify-between items-center px-3 mt-auto'>
            {prevPage ? (
                <button onClick={() => handlePageChange(prevPage)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
            ) : <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-5 opacity-40">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                </button>
            } 
            <div className='flex'>  
            {arrPages.map((page) => (
                <li
                    key={page}
                    className={`font-poppins font-extrabold cursor-pointer py-3 px-5 h-full list-none hover:bg-black hover:text-white ${activePage === page ? 'opacity-40 pointer-events-none' : ''}`}
                    onClick={() => handlePageChange(page)}  
                >
                    {page}
                </li>
            ))}
            </div>
            {nextPage ? (
                <button onClick={() => handlePageChange(nextPage)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            ) : <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-5 opacity-40">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            }
        </div>
    );
}

export default Pagination;
