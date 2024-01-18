

const GlobalCollection = () => {
  return (
    <div className="m-10">
      <h1 className="font-extrabold md:text-6xl text-3xl">GLOBAL COLLABORATION -  <br /> SIMPLY WORK TOGETHER</h1>
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="md:w-full">
          <p className=" mt-4 ">Your brand is present in a huge range of digital and real-world locations.
           But global collaboration presents several challenges: When different people, tools and systems 
           come together, the results can be unpredictable. Quality becomes unreliable, processes slow down 
           and things often get needlessly complicated. File sharing costs your employees time and patience 
           they have to wait for the right files because instead of accessing materials whenever they need them. 
           Working like this is particularly frustrating when your teams are based in different time zones - and  <button className=" md:ml-0 ml-5 mt-5 btn">Learn more.....</button> </p>
           {/* 
           can lead to expensive delays. Disorganization, lack of transparency or an insufficient overview of 
           progress can make it more difficult to maintain control over your brand identity. */}
        </div>
        <div className="relative md:w-[330px]">
          <p className="w-56 border mt-10 md:mt-0 mr-36 px-9 py-14 bg-yellow-300 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, optio.</p>
          <p className="w-28 border mt-5 md:mt-0 rounded-full p-5 absolute top-[-25px] right-11 bg-yellow-300">REQUEST DEMO NEW</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalCollection;