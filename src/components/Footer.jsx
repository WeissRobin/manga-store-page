import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <footer className='h-screen'>
            <div className='flex flex-col h-full border-t border-black pt-5'>
                <div className='flex flex-col w-full h-full pl-5 font-poppins font-semibold text-4xl xl:text-6xl'>
                    <Link>Manga</Link>
                    <Link>Light Novels</Link>
                    <Link>Information</Link>
                    <Link className='mb-10'>About</Link>
                    <Link className='text-3xl xl:text-4xl'>My account</Link>
                    <Link className='text-3xl xl:text-4xl mb-1'>Cart</Link>
                    <div className='flex flex-col pt-10 text-sm xl:text-lg'>
                        <a href="">Twitter↗</a>
                        <a href="">Instagram↗</a>
                        <a href="">Facebook↗</a>
                    </div>
                </div>
                <span className='flex-1 font-poppins font-bold text-xs p-5'>©2024 Nihon Manga, Inc. All Rights Reserved.</span>
            </div>
        </footer>
     );
}

export default Footer;