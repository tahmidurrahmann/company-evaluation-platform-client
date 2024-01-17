import Rating from "react-rating";

const Banner = () => {
    return (
        <div className="max-w-screen-2xl mx-auto my-8 md:my-20 lg:my-40">
            <div className="space-y-4">
                <h1 className="text-[#151746] text-3xl md:text-4xl text-center lg:text-left lg:text-5xl xl:w-1/3 font-semibold">Boost Your IT Skills with Accurate Assessments</h1>
                <p className="text-[#737097] xl:w-1/3 text-center lg:text-left">Empower your IT career with our all-in-one platform! Streamline assessments, track progress, and set meaningful goals. Elevate your skills with precision evaluations and receive continuous feedback. Designed for excellence and growth – your key to success in IT!</p>
                <button className="font-semibold bg-[#007cc7] px-3 py-1 rounded-md text-white hover:scale-105 transition">Start Your IT Journey</button>
                <div className="flex items-center gap-2">
                <Rating
                    initialRating="4.6"
                    emptySymbol={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-yellow-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                    </svg>}
                    fullSymbol={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>}
                    readonly
                />
                <p className="text-[#737097]">From 700+ Reviews on</p>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Banner;
