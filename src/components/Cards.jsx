import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


function Cards() {
  return (
    <div className="w-full py-40 bg-white px-4 md:px-8 lg:px-32">
        <div className="grid sm:grid-cols-3 gap-6 md:gap-12 mx-auto">

            <div className='w-full flex flex-col p-4 my-4 justify-center items-center rounded-lg shadow-2xl hover:scale-103 duration-300'>
                <img src={Single} alt="/" className='w-20 mt-[-3rem]'/>
                <h2 className='font-bold text-2xl py-2'>Single User</h2>
                <p className='font-bold text-4xl py-4'>$149</p>
                <div className='text-center font-medium'>
                  <p className='w-full py-2 border-b border-gray-300'>500 GB Storage</p>
                  <p className='py-2 border-b border-gray-300'>1 Granted User</p>
                  <p className='py-2 border-b border-gray-300'>Send up to 2 GB</p>
                </div>
                <button className='bg-green-500 py-2 px-4 mt-4 rounded-md font-bold cursor-pointer'>Start Trial</button>
            </div>

            <div className='w-full flex flex-col bg-gray-200 p-4 my-8 sm:my-2 justify-center items-center rounded-lg shadow-2xl hover:scale-103 duration-300'>
                <img src={Double} alt="/" className='w-20 -mt-12'/>
                <h2 className='font-bold text-2xl py-2'>PartnerShip</h2>
                <p className='font-bold text-4xl py-4'>$199</p>
                <div className='text-center font-medium'>
                  <p className='w-full py-2 border-b border-gray-300'>1 TB Storage</p>
                  <p className='py-2 border-b border-gray-300'>3 Users Allowed</p>
                  <p className='py-2 border-b border-gray-300'>Send up to 10 GB</p>
                </div>
                <button className='bg-black text-green-500 py-2 px-4 mt-4 rounded-md font-bold cursor-pointer'>Start Trial</button>
            </div>

            <div className='w-full flex flex-col p-4 my-8 sm:my-4 justify-center items-center rounded-lg shadow-2xl hover:scale-103 duration-300'>
                <img src={Triple} alt="/" className='w-20 -mt-12'/>
                <h2 className='font-bold text-2xl py-2'>Group Account</h2>
                <p className='font-bold text-4xl py-4'>$299</p>
                <div className='text-center font-medium'>
                  <p className='w-full py-2 border-b border-gray-300'>5 TB Storage</p>
                  <p className='py-2 border-b border-gray-300'>10 User Allowed</p>
                  <p className='py-2 border-b border-gray-300'>Send up to 20 GB</p>
                </div>
                <button className='bg-green-500 py-2 px-4 mt-4 rounded-md font-bold cursor-pointer'>Start Trial</button>
            </div>
            
        </div>
    </div>
  );
}

export default Cards