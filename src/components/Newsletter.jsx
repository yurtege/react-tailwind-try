

function Newsletter() {
  return (
    <div className="px-4 w-full py-16 text-white">
        <div className="max-w-310 mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="my-4 flex flex-col sm:flex-row justify-center items-center w-full">
                <input type="email" className="bg-white rounded-md text-black placeholder-black w-full px-3 py-2" placeholder="31bagimlisiyagiz@gmail.com"/>
                <button className="ml-2 p-3 bg-green-500 text-black rounded-md cursor-pointer w-50 font-bold mt-2 sm:mt-0">Notify Me</button>
            </div>
            
        </div>
    </div>
  );
}

export default Newsletter