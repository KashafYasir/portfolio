import React from 'react'

const Contactus = () => {
  return (
    <div id="Contact" className="bg-[url('https://as1.ftcdn.net/v2/jpg/06/68/89/44/1000_F_668894466_g1M4DKuVSS2MMlfdPStGDBFz1hIXfYZK.jpg')] bg-cover bg-center bg-no-repeat">
    <section className="text-gray-600 body-font relative" >
        <div className="text-gray-600 body-font"  data-aos="fade-down">
      <div className="container px-3 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Contact Us</h1>
       </div>
        </div>
   </div>
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap"  data-aos="fade-down">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map"   scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.7612447517486!2d67.19539257460256!3d24.8720027779217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb330ac3105754b%3A0x31e88244e8799511!2sSalman%20Tower%20%26%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1732894644630!5m2!1sen!2s"></iframe>
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1">Salman tower Malir Karachi</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a className="text-pink-500 leading-relaxed">kashafali@gmail.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p className="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" data-aos="fade-down">
        <h2 className="text-gray-900 text-lg mb-3 font-bold title-font">Contact</h2>
        <p className="leading-relaxed mb-5 text-gray-600">Feel free to Contact</p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg" data-aos="fade-down">Send</button>
        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </div>
    </div>
  </section>
  </div>
  

  )
}

export default Contactus