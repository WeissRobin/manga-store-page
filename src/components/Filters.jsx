function Filters() {
    const Themes = [
        "Adult Cast",
        "Anthropomorphic",
        "CGDCT",
        "Childcare",
        "Combat Sports",
        "Crossdressing",
        "Delinquents",
        "Detective",
        "Educational",
        "Gag Humor",
        "Gore",
        "Harem",
        "High Stakes Game",
        "Historical",
        "Idols (Female)",
        "Idols (Male)",
        "Isekai",
        "Iyashikei",
        "Love Polygon",
        "Magical Sex Shift",
        "Mahou Shoujo",
        "Martial Arts",
        "Mecha",
        "Medical",
        "Military",
        "Music",
        "Mythology",
        "Organized Crime",
        "Otaku Culture",
        "Parody",
        "Performing Arts",
        "Pets",
        "Psychological",
        "Racing",
        "Reincarnation",
        "Reverse Harem",
        "Romantic Subtext",
        "Samurai",
        "School",
        "Showbiz",
        "Space",
        "Strategy Game",
        "Super Power",
        "Survival",
        "Team Sports",
        "Time Travel",
        "Vampire",
        "Video Game",
        "Visual Arts",
        "Workplace"
    ];
    const Genres = [
        "Action",
        "Adventure",
        "Avant Garde",
        "Award Winning",
        "Boys Love",
        "Comedy",
        "Drama",
        "Fantasy",
        "Girls Love",
        "Gourmet",
        "Horror",
        "Mystery",
        "Romance",
        "Sci-Fi",
        "Slice of Life",
        "Sports",
        "Supernatural",
        "Suspense"
    ];
    

    return ( 
        <div className='manga-filters font-poppins border-t border-black py-4 md:col-start-1 md:row-start-1 md:border-r md:border-black'>
            <h2 className='pl-4 text-2xl font-bold lg:text-3xl lg:py-5'>Genres</h2>
            <div className='grid grid-cols-2 md:grid-cols-1 content-center justify-center items-center ml-[4em]'>
                {
                    Genres.map((genre, index) => (
                        <div key={index} className='flex text-[13px] lg:text-base'>
                            <div className='relative'>
                                <input type='checkbox' className='h-0 w-0 after:content-[""] after:text-white after:w-[8px] after:h-[8px] after:border after:border-black after:absolute after:top-1/2 after:-left-3 after:-translate-y-1/2 check-default peer'/>
                                <span className='absolute top-1/2 -translate-y-1/2 -left-3 bg-black w-[8px] h-[8px] hidden pointer-events-none peer-checked:block'></span>
                            </div>
                            <span>{genre}</span>
                        </div>
                    ))
                }
            </div>
            <h2 className='pl-4 text-2xl font-bold lg:text-3xl lg:py-5'>Themes</h2>
            <div className='grid grid-cols-2 md:grid-cols-1 content-center justify-center items-center ml-[4em]'>
                {
                    Themes.map((theme, index) => (
                        <div key={index} className='flex text-[13px] lg:text-base lg:mr-10'>
                            <div className='relative'>
                                <input type='checkbox' className='h-0 w-0 after:content-[""] after:text-white after:w-[8px] after:h-[8px] after:border after:border-black after:absolute after:top-1/2 after:-left-3 after:-translate-y-1/2 check-default peer'/>
                                <span className='absolute top-1/2 -translate-y-1/2 -left-3 bg-black w-[8px] h-[8px] hidden pointer-events-none peer-checked:block'></span>
                            </div>
                            <span>{theme}</span>
                        </div>
                    ))
                }
            </div>
        </div> 
    );
}

export default Filters;