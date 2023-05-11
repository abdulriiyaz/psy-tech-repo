import { GiEyeOfHorus } from 'react-icons/gi';

export const CTA = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                            Experience an unforgettable night of techno music.
                        </h1>
                        <button className="flex-shrink-0 text-white bg-[#e1526e] border-0 py-2 px-8 active:bg-[#8a0822] focus:outline-none hover:bg-[#b20a2c] rounded text-lg mt-10 sm:mt-0">
                            Book Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
