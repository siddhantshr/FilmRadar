import PropTypes from 'prop-types'

export default function Card({ title, year, imdbID, poster }) {
    return (
        <div className="p-8">
            <article className="w-full h-full border-2 border-gray-700 rounded-xl p-4 text-white shadow-lg flex flex-col">
                <div className="rounded-lg overflow-hidden">
                    <img
                        src={poster}
                        alt={title}
                        className="w-full h-48 md:h-56 lg:h-48 object-cover"
                    />
                </div>

                <div className="mt-4 flex-1 flex flex-col">
                    <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                        {title}
                    </h3>

                    <h2 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                        {title}
                    </h2>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-6">
                        {year}
                    </p>

                    <div className="mt-auto">
                        <a
                            href={`/details?id=${imdbID}`}
                            className="inline-flex items-center text-red-400 hover:text-red-300"
                        >
                            Learn More
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}
