
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationCityIcon from '@mui/icons-material/LocationCity';
const Contact = () => {
    return (
        <div className="bg-black text-white py-20" id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center  mb-12'>Contact</h2>
                <div className="className='flex flex-col md:flex-row items-center md:space-x-12'">
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
                             Phone
                           </a>
                        </div>
                        <div className="mb-4 ">
                           <p className="inline-block text-green-400 mr-2"><LocationCityIcon fontSize='large' /></p>
                           <a href="email@email.com" className="hover:underline">
                             Cidade-estado
                           </a>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <form className="space-y-4" action="">
                            <div>
                                <label htmlFor=""></label>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

            )
}

export default Contact;