import {
    FaDribbbleSquare,
    FaFacebook,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

function Footer() {
  return (
    <div className="max-w-310 mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
            <h1 className="text-green-500 font-bold text-2xl">REACT.</h1>
            <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquam, in quis expedita accusantium, est deleniti magnam veritatis soluta repellendus, vero voluptate ullam nobis. Doloribus consectetur ullam commodi beatae officia.</p>
            <div className='flex gap-16'>
                <FaDribbbleSquare size={30}/>
                <FaFacebook size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
            </div>
        </div>

        <div className='flex justify-between lg:col-span-2'>
            <div>
                <h6 className='text-gray-500'>Solutions</h6>
                <ul className='flex flex-col gap-2'>
                    <li className='mt-2 text-sm'>Analytics</li>
                    <li className='text-sm'>Marketing</li>
                    <li className='text-sm'>Commerce</li>
                    <li className='text-sm'>Insights</li>
                </ul>
            </div>

            <div>
                <h6 className='text-gray-500'>Support</h6>
                <ul className='flex flex-col gap-2'>
                    <li className='mt-2 text-sm'>Pricing</li>
                    <li className='text-sm'>Documentation</li>
                    <li className='text-sm'>Guides</li>
                    <li className='text-sm'>API Status</li>
                </ul>
             </div>

            <div>
                <h6 className='text-gray-500'>Company</h6>
                <ul className='flex flex-col gap-2'>
                    <li className='mt-2 text-sm'>About</li>
                    <li className='text-sm'>Blog</li>
                    <li className='text-sm'>Jobs</li>
                    <li className='text-sm'>Press</li>
                    <li className='text-sm'>Careers</li>
                </ul>
            </div>

            <div>
                <h6 className='text-gray-500'>Legal</h6>
                <ul className='flex flex-col gap-2'>
                    <li className='mt-2 text-sm'>Claim</li>
                    <li className='text-sm'>Policy</li>
                    <li className='text-sm'>Terms</li>
                </ul>
            </div>
        </div>
        
    </div>
  );
}

export default Footer