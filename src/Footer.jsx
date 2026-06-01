import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className='w-full bg-gray-50 border-t border-gray-200 text-gray-600'>
                
                
                <div className='flex flex-col gap-10 p-6 xl:flex-row xl:justify-evenly xl:mb-0 xl:p-14'>
                    
                   
                    <div>
                        <h3 className='font-bold pb-4 text-2xl text-black'>Useful Links</h3>
                        <ul className='flex flex-wrap gap-10 md:gap-16 xl:gap-10'>
                            <li>
                                <ul className='space-y-2'>
                                    <li className="hover:text-black cursor-pointer">Blog</li>
                                    <li className="hover:text-black cursor-pointer">Privacy</li>
                                    <li className="hover:text-black cursor-pointer">Terms</li>
                                    <li className="hover:text-black cursor-pointer">FAQs</li>
                                    <li className="hover:text-black cursor-pointer">Security</li>
                                    <li className="hover:text-black cursor-pointer">Contact</li>
                                </ul>
                            </li>
                            <li>
                                <ul className='space-y-2'>
                                    <li className="hover:text-black cursor-pointer">Partner</li>
                                    <li className="hover:text-black cursor-pointer">Franchise</li>
                                    <li className="hover:text-black cursor-pointer">Seller</li>
                                    <li className="hover:text-black cursor-pointer">Warehouse</li>
                                    <li className="hover:text-black cursor-pointer">Deliver</li>
                                    <li className="hover:text-black cursor-pointer">Resources</li>
                                </ul>
                            </li>
                            <li>
                                <ul className='space-y-2'>
                                    <li className="hover:text-black cursor-pointer">Recipes</li>
                                    <li className="hover:text-black cursor-pointer">Bistro</li>
                                    <li className="hover:text-black cursor-pointer">District</li>
                                    <li className="hover:text-black cursor-pointer">Blinkit Ambulance</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

              
                    <div>
                        <h3 className='font-bold pb-5 text-2xl text-black'>Categories</h3>
                        
                        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:gap-20'>
                            <li>
                                <ul className='space-y-2'>
                                    <li className="hover:text-black cursor-pointer">Vegetables & Fruits</li>
                                    <li className="hover:text-black cursor-pointer">Cold Drinks & Juices</li>
                                    <li className="hover:text-black cursor-pointer">Bakery & Biscuits</li>
                                    <li className="hover:text-black cursor-pointer">Dry Fruits, Masala & Oil</li>
                                    <li className="hover:text-black cursor-pointer">Paan Corner</li>
                                    <li className="hover:text-black cursor-pointer">Pharma & Wellness</li>
                                    <li className="hover:text-black cursor-pointer">Personal Care</li>
                                    <li className="hover:text-black cursor-pointer">Magazines</li>
                                    <li className="hover:text-black cursor-pointer">Electronics & Electricals</li>
                                    <li className="hover:text-black cursor-pointer">Toys & Games</li>
                                    <li className="hover:text-black cursor-pointer">Rakhi Gifts</li>
                                </ul>
                            </li>
                            <li>
   
                                <ul className='space-y-2'>
                                    <li className="hover:text-black cursor-pointer">Dairy & Breakfast</li>
                                    <li className="hover:text-black cursor-pointer">Instant & Frozen Food</li>
                                    <li className="hover:text-black cursor-pointer">Sweet Tooth</li>
                                    <li className="hover:text-black cursor-pointer">Sauces & Spreads</li>
                                    <li className="hover:text-black cursor-pointer">Organic & Premium</li>
                                    <li className="hover:text-black cursor-pointer">Cleaning Essentials</li>
                                    <li className="hover:text-black cursor-pointer">Pet Care</li>
                                    <li className="hover:text-black cursor-pointer">Kitchen & Dining</li>
                                    <li className="hover:text-black cursor-pointer">Stationery Needs</li>
                                    <li className="hover:text-black cursor-pointer">Print Store</li>
                                </ul>
                            </li>
                            <li>
                                <ul className='space-y-2'>
                                    <li className="hover:text-black cursor-pointer">Munchies</li>
                                    <li className="hover:text-black cursor-pointer">Tea, Coffee & Milk Drinks</li>
                                    <li className="hover:text-black cursor-pointer">Atta, Rice & Dal</li>
                                    <li className="hover:text-black cursor-pointer">Chicken, Meat & Fish</li>
                                    <li className="hover:text-black cursor-pointer">Baby Care</li>
                                    <li className="hover:text-black cursor-pointer">Home Furnishing & Decor</li>
                                    <li className="hover:text-black cursor-pointer">Beauty & Cosmetics</li>
                                    <li className="hover:text-black cursor-pointer">Fashion & Accessories</li>
                                    <li className="hover:text-black cursor-pointer">Books</li>
                                    <li className="hover:text-black cursor-pointer">E-Gift Cards</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

              
                <hr className="border-gray-200 mx-6 xl:mx-14" />
                
                <div>
                   
                    <div className='flex flex-col gap-6 p-6 items-center text-center xl:flex-row xl:justify-between xl:p-14 xl:text-left'>
                        <h5 className='text-sm text-gray-500'>© Blink Commerce Private Limited, 2016-2026</h5>  
                        
                        <div className='flex flex-wrap items-center justify-center gap-4'>
                            <h5 className='text-xl font-semibold text-black'>Download App</h5>
                            <img src="./image1.png" alt="App Store" className="h-10 w-auto" />
                            <img src="./image2.png" alt="Play Store" className="h-10 w-auto" />
                        </div>

                        <div className='flex gap-3 text-white'>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black rounded-full hover:opacity-80"><i className="fa-brands fa-facebook-f text-lg"></i></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black rounded-full hover:opacity-80"><i className="fa-brands fa-x-twitter text-lg"></i></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black rounded-full hover:opacity-80"><i className="fa-brands fa-instagram text-lg"></i></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black rounded-full hover:opacity-80"><i className="fa-brands fa-linkedin-in text-lg"></i></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center bg-black rounded-full hover:opacity-80"><i className="fa-brands fa-threads text-lg"></i></a>
                        </div>
                    </div>

                    
                    <div className='px-6 pb-10 text-base text-gray-400 leading-relaxed xl:px-14'>
                        <h5>
                            “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
                        </h5>
                    </div>
                </div>
            </footer>
        </>
    )
}