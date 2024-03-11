export default function Footer() {
  return (
    <footer className=" backdrop-blur-md bg-black/50 mt-48 side-section border-t-2 border-white">
      <div className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <p className="uppercase font-bold text-md text-white">Company Name</p>
          <p className="text-sm text-gray-300">
            Welcome to Simple Product Shop, where we strive to deliver
            exceptional products and services. Our commitment is to provide you
            with the best experiences and meet your expectations.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <p className="uppercase font-bold text-md text-white">Products</p>
          <p className="text-sm text-gray-300">
            Explore our diverse range of high-quality products designed to
            enhance your lifestyle. From innovative solutions to timeless
            classics, we have something for everyone.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <p className="uppercase font-bold text-md text-white">Useful Links</p>
          <p className="text-sm text-gray-300">
            Navigate through our website to find helpful resources, guides, and
            information. Whether you are a new customer or a returning one, we
            want to make your journey with us seamless and enjoyable.
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <p className="uppercase font-bold text-md text-white">Contacts</p>
          <p className="text-sm text-gray-300">
            Have questions or feedback? Reach out to our dedicated support team.
            We value your input and are here to assist you in any way we can.
          </p>
        </div>
      </div>
    </footer>
  );
}
