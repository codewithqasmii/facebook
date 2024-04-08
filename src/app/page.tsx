import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center ">

      <div className="text-3xl w-1/2 px-14  ">
        <Image
        src={"/pictures/facebook.svg"} 
        width={300} 
        height={100} 
        alt="Facebook Logo"/>

        <p className="ml-8 -mt-3" >
          Facebook helps you connect and share with the people in your life.
          </p>
      </div>

      <div className="bg-white flex flex-col p-5 rounded-xl w-1/4">
        <input className="my-2 border-1 border-grey-100 p-3 rounded-md focus:outline-1 outline-blue-600" type="text" placeholder="Email address or phone number" />
        <input className="my-2 border-1 border-grey-100 p-3 rounded-md focus:outline-1 outline-blue-600" type="password" placeholder="password" />

        <button className="bg-blue-500 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-600 ">Log In</button>
        <p className=" text-blue-600 text-center hover:underline cursor-pointer text-sm">Forgotten password?</p>
        <span className="my-2">
          <hr />
        </span>

        <button className="bg-green-600 my-2 py-2 px-2 text-lg font-bold text-white rounded-md m-auto hover:bg-green-700">Create new account</button>

      </div>

    </div>
  );
}
