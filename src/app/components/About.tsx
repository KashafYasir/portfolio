import React from 'react'

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font  bg-[url('https://img.freepik.com/premium-photo/top-view-dark-stylish-workplace-with-smartphone-office-supplies_67155-2963.jpg')] bg-cover bg-center bg-no-repeat">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src="https://th.bing.com/th/id/R.806b406dba0be592a37b6f485bb2c2a2?rik=%2fkgFD16fhzlKog&pid=ImgRaw&r=0"/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">About Us
          
        </h1>
        <p className="mb-8 leading-relaxed text-gray-200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quod quo repudiandae nostrum, nisi aspernatur commodi architecto numquam suscipit, dolor minima temporibus porro.

        </p>
        <p className="mb-8 leading-relaxed text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eaque tempora debitis nesciunt possimus labore, odio, tenetur tempore fugit expedita, optio ratione! Sed labore saepe ab rerum commodi fugiat nostrum excepturi laborum soluta illo! Dignissimos, voluptas molestiae ex recusandae qui deleniti pariatur aperiam debitis fugiat unde, error blanditiis? Error perspiciatis dolorem voluptas nesciunt voluptate!Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quod quo repudiandae nostrum, nisi aspernatur commodi architecto numquam suscipit, dolor minima temporibus porro.

</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Veiw CV</button>
          
        </div>
      </div>
    </div>
  </section></div>
             
  )
}

export default About