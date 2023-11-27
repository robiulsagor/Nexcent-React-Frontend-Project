import React from 'react'
import logo1 from "../assets/company/logo1.png"
import logo2 from "../assets/company/logo2.png"
import logo3 from "../assets/company/logo3.png"
import logo4 from "../assets/company/logo4.png"
import logo5 from "../assets/company/logo5.png"
import logo6 from "../assets/company/logo6.png"

const Service = () => {
    const services = [
        { id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments", image: "src/assets/icons/icon1.png" },
        { id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: "src/assets/icons/icon2.png" },
        { id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: "src/assets/icons/icon3.png" },
    ]

    return (
        <div className='md:px-20 px-4 py-16 max-w-screen-2xl mx-auto'>
            <div className='text-center my-8'>
                <h2 className='text-4xl font-semibold text-neutralDGray mb-2'>Our Clients</h2>
                <p className='text-neutralGray'>We have been working with some Fortune 500+ clients</p>

                {/* company logo  */}
                <div className='my-12 flex flex-wrap gap-12 items-center justify-between '>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={logo3} alt="" />
                </div>
            </div>

            <div className='w-1/2 mx-auto text-center mt-20'>
                <h2 className='text-4xl font-semibold text-neutralDGray mb-2'>Manage your entire community in a single system</h2>
                <p className='text-neutralGray'>Who is Nextcent suitable for? </p>
            </div>

            <div className='mt-14 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-11/12 mx-auto'>
                {services.map(service => {
                    return <div key={service.id} className='px-4 py-8 text-center shadow rounded-md md:w-[300px] mx-auto md:h-80 cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-500 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className='bg-tintT5 h-14 w-14 mx-auto rounded-tl-xl rounded-br-3xl'>
                                <img src={service.image} />
                            </div>
                            <h4 className='text-2xl font-bold text-neutralDGray mb-2 px-2'> {service.title}</h4>
                            <p className='text-base text-neutralGray'>
                                {service.description}
                            </p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Service