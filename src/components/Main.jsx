import ShortenForm from "./ShortenForm";

function Main() {
  return (
    <div className="main flex flex-col gap-10 bg-[#ececf0]">
        <div className="form">
            <ShortenForm />
        </div> 

        <div className="main-text flex flex-col items-center gap-2 mt-4 mb-16">
            <h1 className="text-3xl font-bold">Advanced Statistics</h1>
            <p className="opacity-50 text-center px-5">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>

        <div className="card flex justify-center mx-20 gap-6 mb-7">
            <div className="w-80 h-56 bg-white px-5 my-2 pt-16 rounded-2xl relative">
                <img className="w-16 absolute top-0 left-0 " src="https://img.freepik.com/premium-vector/brand-awareness-abstract-concept-vector-illustration_107173-24743.jpg?w=740" alt="brand-image" />
                <h2 className="font-bold text-2xl mb-3 text-[#33235c]">Brand Recognition</h2>
                <p className="text-base opacity-60 pb-2">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content .</p>
            </div>
            <div className="w-80 h-60 bg-white px-5 pt-16 mt-8 rounded-2xl relative">
                <img className="w-16 absolute top-0 left-0" src="https://img.freepik.com/free-vector/characters-people-searching-through-files_53876-66241.jpg?w=740&t=st=1695055500~exp=1695056100~hmac=38c337ac6a3bee9f16e0d4591ae17a3c748d33afb1ff59b734214ae5ee10645c" alt="" />
                <h2 className="font-bold text-2xl mb-3 text-[#33235c]">Detailed Records</h2>
                <p className="text-base opacity-60">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div className="w-80 h-60 bg-white px-10 pt-16 mt-16 rounded-2xl relative">
                <img className="w-16 absolute top-0 left-0" src="https://img.freepik.com/free-vector/niche-service-marketplace-concept-illustration_114360-7583.jpg?w=740&t=st=1695055614~exp=1695056214~hmac=a1a8d2f761adef7aec9d386975f17b00c353190b0f7f105a9e4fa1032258c506" alt="" />
                <h2 className="font-bold text-2xl mb-3 text-[#33235c]">Fully Customizble</h2>
                <p className="text-base opacity-60">Improve brand awareness andcontent discoverability through customizable links, supercharging audience engagement.</p>
            </div>
            {/* <div className="border-solid border-b-2 border-sky-500 "></div> */}
        </div>

        <div className="last-main bg-[#3a3053] py-8 mt-5 text-center">
            <h1 className="text-white font-bold text-2xl">Boost your links today</h1>
            <button className="bg-[#2ad1d2] px-7 py-2 mt-2 rounded-3xl text-white hover:bg-[#9be3e2]">Get Started</button>
        </div>
    </div>
  )
}

export default Main