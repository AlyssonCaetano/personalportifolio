
const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto p-8 md:px-16 lg:px-24">
                <div className="flex flex-col  items-center ">
                    <div className="">
                        <p>
                            &copy;{new Date().getFullYear()} ProgCaetano. All rights reserved
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;