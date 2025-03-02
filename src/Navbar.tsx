

function Navbar() {
  return (
    <div className=" w-full font-bold">
        <ul className="flex flex-row gap-10 justify-around cursor-pointer text-3xl">
            <li className="h-fit w-fit hover:text-blue-300 hover:scale-110 duration-300 px-4 py-2 rounded-xl">Home</li>
            <li className="h-fit w-fit hover:text-blue-300 hover:scale-110 duration-300 px-4 py-2 rounded-xl">About</li>
            <li className="h-fit w-fit hover:text-blue-300 hover:scale-110 duration-300 px-4 py-2 rounded-xl">Projects</li>
            <li className="h-fit w-fit hover:text-blue-300 hover:scale-110 duration-300 px-4 py-2 rounded-xl">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar