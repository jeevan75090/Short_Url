function Hero() {
  return (
    <div className="hero flex my-10 mx-20 mb-16">
      <div className="hero-text w-1/2 mt-16">
        <h1 className="text-7xl font-bold mb-2 leading-tight">
          More than just shorter links
        </h1>
        <p className="opacity-40 font-bold mb-7">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-[#2ad1d2] px-6 py-2 rounded-3xl text-white hover:bg-[#9be3e2]">
          Get Started
        </button>
      </div>

      <div className="w-1/2 ml-20 ">
        <img
          className="object-coverw-96 h-96 hover:scale-110 duration-200"
          src="https://img.freepik.com/premium-vector/businessman-sitting-computer-office-doing-many-tasks-same-time-freelance-worker-multitasking-skills-effective-time-management-productivity-concept_458444-1232.jpg?w=740"
          alt="laptop"
        />
      </div>
    </div>
  );
}

export default Hero;
