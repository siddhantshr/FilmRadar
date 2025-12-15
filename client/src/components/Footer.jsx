import React from "react"

const Footer = () => {
    return (
        <footer className="text-gray-400 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a
                    href="/logo1.png"
                    className="flex title-font font-medium items-center md:justify-start justify-center text-white"
                >
                    <img
                        src="/logo1.png"
                        height="40"
                        width="40"
                        alt="img"
                        className="circle_image"
                    />
                    <span className="ml-3 text-xl">S1D</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                    Copyright (c) 2025 —
                    <a
                        href="https://github.com/siddhantshr/"
                        className="text-gray-500 ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @siddhantshr
                    </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a
                        href="https://github.com/siddhantshr/"
                        className="text-gray-400"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="mailto:31.siddhant.sharma@gmail.com"
                        className="ml-3 text-gray-400"
                    >
                        <i className="fa-solid fa-at"></i>
                    </a>
                    <a
                        href="https://instagram.com/sidsharma.31"
                        className="ml-3 text-gray-400"
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                        href="https://linkedin.com/in/siddhant-sharma-660202214"
                        className="ml-3 text-gray-400"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
