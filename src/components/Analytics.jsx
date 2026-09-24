import Laptop from '../assets/laptop.jpg';


function Analytics() {
  return (
    <div className="bg-white w-full py-16 px-4">
        <div className="max-w-310 mx-auto grid md:grid-cols-2">
            <img src={Laptop} alt="/" className="w-125 mx-auto my-4" />

            <div className="flex flex-col justify-center">
                <p className="text-green-500 font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="font-bold text-2xl mb-2">Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ad modi dignissimos suscipit placeat tempore inventore delectus aspernatur eaque culpa. Aut necessitatibus minus alias ut, amet facere veritatis deserunt ipsum!</p>
                <button className="bg-black w-40 text-green-500 rounded-md py-3 mt-6 mx-auto md:mx-0 cursor-pointer">Get Started</button>
            </div>
        </div>
    </div>
  );
}

export default Analytics