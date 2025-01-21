
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationCityIcon from '@mui/icons-material/LocationCity';
const Contact = () => {
    return (
        <div className="bg-black text-white py-20" id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center  mb-12'>Contact</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className="flex-1">
                        <h3 className=" text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 ">Let`s Talk</h3>
                        <p> I`m open to discussing web develompent project or partnership opportunities</p>
                        <div className="mb-4 mt-8">
                           <p className="inline-block text-green-400 mr-2">
                            <MailOutlineIcon fontSize="large"/>
                           </p>
                           
                           <a href="email@email.com" className="hover:underline">
                             meuemail@email.com
                           </a>
                        </div>
                        <div className="mb-4 ">
                           <p className="inline-block text-green-400 mr-2">
                                <PhoneAndroidIcon fontSize="large"/>
                            </p>
                           <a href="email@email.com" className="hover:underline">
                             +55 79 9 9999-9999
                           </a>
                        </div>
                        <div className="mb-4 ">
                           <p className="inline-block text-green-400 mr-2"><LocationCityIcon fontSize='large' /></p>
                           <a href="email@email.com" className="hover:underline">
                             Aracaju - SE
                           </a>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <form className="space-y-4">
                            <div>
                                <label 
                                htmlFor='name'
                                className='block mb-2'>Your Name</label>
                                <input type="text" 
                                id='name'
                                autoComplete='off'
                                className='w-full p-2 rounded bd-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                placeholder='Enter Your Name' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>Your E-mail</label>
                                <input type="text"
                                autoComplete='off'
                                id='email'
                                className='w-full p-2 rounded bd-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                placeholder='Enter Your E-mail' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>Message</label>
                                <textarea type="text"
                                id='message'
                                className='w-full p-2 rounded bd-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                rows="5"                                placeholder='Enter Message' />
                            </div>
                            <button
                            className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                            >Send</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

            )
}

export default Contact;