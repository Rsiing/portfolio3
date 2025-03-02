

function Hero() {
    const numbers = ["welcome",2,3,4,"Hey Love"];
    const listItems = numbers.map((number) =>
    <li>{number}</li>);
   
  return (
    <div className="py-10">
        <div className="grid grid-cols-2 gap-5 grid-rows-2">
        <div className=" w-full h-[300px] flex flex-col relative top-4">
            <h1 className="text-4xl font-semibold text-blue-400">Ryan Singleton</h1>
            <h2 className="text-2xl relative left-4 text-blue-300">Aspiring software engineer</h2>
            <p className="flex relative top-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id risus felis.
                 Maecenas eleifend elementum rhoncus. In luctus, sem eu dictum pulvinar,
                 lacus nisi euismod quam, vitae ultricies arcu nulla ut nibh. Cras dignissim
                  est at lorem euismod hendrerit.
            </p>
        </div>
        <div className="bg-slate-300 rounded-xl w-full h-[300px]"></div>
        <div className="border-4 w-full col-span-2 flex flex-row gap-4">
            <ul>{listItems}</ul>
        </div>
    </div>
    </div>
  )
}

export default Hero