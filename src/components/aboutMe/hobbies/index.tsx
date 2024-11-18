'use client'
import Image from "next/image"

export default function Hobbies() {
    return (
        <div id="hobbies" className="bg-gradient-to-r from-[#0F968C] via-[#6DA5C0] to-[#294D61] w-full min-h-screen text-white py-16 flex flex-col items-center justify-center">

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center leading-tight">
                I am a Software Engineer who loves to:
            </h1>
            <h2 className="text-xl md:text-2xl mb-16 text-center font-light italic text-[#294D61]">
                Cook, Play Music, Listen to/Watch Comedy, Travel, Play Table Games, Journal  and Manifest my Dreams
            </h2>

            {/* Hobby Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 md:px-16">

                {/* Comedy Section with Text Overlay */}
                <div className="relative flex flex-col items-center text-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl overflow-hidden group">
                        <Image
                            src="/images/comedy.webp"
                            alt="Comedy"
                            layout="fill"
                            objectFit="cover"
                            className="transform transition duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
                            <p className="text-lg md:text-xl font-semibold text-white text-shadow-md">When I need a good laugh, I turn to the masters of humor. Steve Harvey, Trevor Noah, and Josh Johnson always have me in stitches. A good laugh recharges my batteries after a long day of coding.</p>
                        </div>
                    </div>
                </div>

                {/* Cooking Section with Text Overlay */}
                <div className="relative flex flex-col items-center text-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl overflow-hidden group">
                        <Image
                            src="/images/cooking.jpg"
                            alt="Cooking"
                            layout="fill"
                            objectFit="cover"
                            className="transform transition duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
                            <p className="text-lg md:text-xl font-semibold text-white text-shadow-md">Cooking is my creative outlet. It's like solving a problem, but tastier! Whether experimenting with recipes or perfecting classics, the kitchen is where I express my creativity.</p>
                        </div>
                    </div>
                </div>

                {/* Music Section with Text Overlay */}
                <div className="relative flex flex-col items-center text-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl overflow-hidden group">
                        <Image
                            src="/images/musical.jpg"
                            alt="Music"
                            layout="fill"
                            objectFit="cover"
                            className="transform transition duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
                            <p className="text-lg md:text-xl font-semibold text-white text-shadow-md">Music is my escape. I love breaking down complex pieces into melodies, and experimenting with vocal ranges. It's how I express myself beyond words.</p>
                        </div>
                    </div>
                </div>

                {/* Travel Section with Text Overlay */}
                <div className="relative flex flex-col items-center text-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl overflow-hidden group">
                        <Image
                            src="/images/travel.webp"
                            alt="Travel"
                            layout="fill"
                            objectFit="cover"
                            className="transform transition duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
                            <p className="text-lg md:text-xl font-semibold text-white text-shadow-md">Traveling lets me explore new cultures and places. It’s not just about the destinations; it’s about the journey and the insights I gain along the way.</p>
                        </div>
                    </div>
                </div>

                {/* Journaling & Manifestation Section with Text Overlay */}
                <div className="relative flex flex-col items-center text-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl overflow-hidden group">
                        <Image
                            src="/images/journaling.webp"
                            alt="Journaling"
                            layout="fill"
                            objectFit="cover"
                            className="transform transition duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
                            <p className="text-lg md:text-xl font-semibold text-white text-shadow-md">Journaling helps me reflect, manifest, and set my goals. Writing my intentions turns them into reality, keeping me aligned with my purpose and dreams.</p>
                        </div>
                    </div>
                </div>



                <div className="relative flex flex-col items-center text-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl overflow-hidden group">
                        <Image
                            src="/images/tablegames.jpeg"
                            alt="Journaling"
                            layout="fill"
                            objectFit="cover"
                            className="transform transition duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
                            <p className="text-lg md:text-xl font-semibold text-white text-shadow-md">
                                Table games are my ultimate escape, a blend of strategy, laughter, and friendly competition. They’re all about the thrill of the moment and the joy of connection. No screens, just healthy energy and great company!</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Conclusion */}
            <div className="text-center mt-12 px-4 md:px-16">
                <p className="text-lg md:text-xl font-bold text-shadow-md italic">
                    I can’t imagine a day without at least one of these elements in my life. They keep me grounded, inspired, and balanced. Whether I’m cracking up at a Steve Harvey special, playing my favorite tune, reflecting in my journal, exploring the world, playing chess or manifesting my dreams, these hobbies bring joy and meaning into my life.
                </p>
            </div>

        </div>
    )
}
