"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Premium() {
  const plans = [
    {
      name: 'Basic',
      price: '49₹',
      storage: '10 GB storage',
      features: ['1 website', 'Unlimited bandwidth', 'Basic customer support'],
      link: '/payment/basic',
      // buttonText: 'Get Started'
    },
    {
      name: 'Standard',
      price: '99₹',
      storage: '50 GB storage',
      features: ['5 websites', 'Unlimited bandwidth', 'Priority customer support', 'SSL certificates included'],
      link: '/payment/business',
      // buttonText: 'Upgrade Now',
      popular: true
    },
    {
      name: 'Expert',
      price: '149₹',
      storage: 'Unlimited storage',
      features: ['Unlimited websites', 'Unlimited bandwidth', 'Premium customer support', 'Enhanced security features'],
      link: '/payment/pro',
      // buttonText: 'Choose Plan'
    }
  ];

  const router = useRouter();

  function handleClick(){
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-800 to-yellow-950 text-white p-6">
    {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-6"> */}
      <h1 className="text-4xl font-extrabold mb-16 text-white ">Premium Plans</h1>
      {/* <h1 className="text-4xl font-extrabold mb-16 bg-gradient-to-r from-yellow-950 to-yellow-800 text-transparent bg-clip-text ">Premium Plans</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-96 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between relative bg-transparent p-6 rounded-2xl shadow-xl text-center w-80 transform transition duration-300 hover:scale-105 hover:bg-gray-800 hover:bg-opacity-50 ${plan.popular ? 'border-4 border-yellow-700' : ''}`}
          >
          <div>
            {plan.popular && (
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-700 text-white text-xs font-bold py-1 px-3 rounded-b-lg">Most Popular</span>
            )}
            <h2 className="text-xl font-semibold mt-2 mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold mb-4">{plan.price} <span className="text-sm">/ Monthly</span></p>
            <p className="mb-4">{plan.storage}</p>
            <ul className="mb-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-sm">{feature}</li>
              ))}
            </ul>
            {/* <Link href={plan.link}> */}
              {/* <button onClick={handleClick} className=" w-full bg-yellow-900 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-xl transition">Upgrade Now</button> */}
            {/* </Link> */}
          </div>
          <div>
              <button onClick={handleClick} className=" w-full bg-yellow-900 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-xl transition">Upgrade Now</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
