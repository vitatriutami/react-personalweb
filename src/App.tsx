export default function App() {
  return (
    <div>
      <header className="flex justify-between items-center p-16">
        <div className="font-bold text-3xl bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent">
          vita.
        </div>
        <div className="flex items-center bg-neutral-100 p-2 rounded-full">
          <div className="bg-white shadow-md shadow-neutral-200 px-5 py-2 rounded-full">
            All
          </div>
          <div className="px-5 py-2">About</div>
          <div className="px-5 py-2">Project</div>
          <div className="px-5 py-2">Media</div>
        </div>
        <div>Contact</div>
      </header>
      <main className="w-[1200px] m-auto grid grid-cols-4 gap-6">
        {/* Content 1 */}
        <div className="card flex flex-col justify-end relative col-span-2">
          <div className="absolute top-4 right-4 border px-4 py-2 rounded-full w-fit">
            Available for work
          </div>
          <img src="" alt="" />
          <p>
            Hello I am Vita. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Labore possimus, recusandae est suscipit, hic expedita magni
            illum enim, quo sunt tenetur. Aperiam totam molestias ex magni nemo
            recusandae necessitatibus aliquid?
          </p>
        </div>

        {/* Content 2 */}
        <div className="card relative bg-black">
          <a href="http://twitter.com" target="_blank">
            <div className="absolute overflow-hidden w-[32px] group hover:w-[100px] flex justify-end items-center gap-1 bottom-4 left-4 text-black bg-white rounded-full py-1 px-1 hover:px-3 hover:ring-4 hover:ring-rose-500 transition-all duration-200">
              {" "}
              <p className="absolute opacity-0 hover:opacity-100 -left-16 group-hover:left-2 transition-all duration-300 text-sm">
                portofolio
              </p>
              ^{" "}
            </div>
          </a>
        </div>
        <div className="card row-span-2"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card row-span-2"></div>
      </main>
    </div>
  );
}
