import Search from "../ui/search/Search";

export default async function Products() {
  return (
    <main className="flex flex-col h-[100vh] w-full items-center justify-center">
      <div className="p-20 h-full w-full flex gap-6 justify-center items-center">
        <div className="w-[20%] flex items-start justify-center border h-full">
          Filters
        </div>
        <div className="w-[80%] flex flex-col gap-6 items-center justify-start h-full">
          {/* <Search /> */}
          <div className="border w-full h-full">Products</div>
        </div>
      </div>
    </main>
  );
}
