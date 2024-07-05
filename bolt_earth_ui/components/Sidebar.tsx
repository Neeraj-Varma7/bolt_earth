import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-900 text-white flex flex-col">
      <div className="p-2">
        <h1 className="text-xl font-bold">Bolt Earth</h1>
      </div>
      <nav className="flex-1">
        <ul>
          <Link href='/'><li className="p-2 text-sm hover:bg-gray-700 cursor-pointer">
            Overview
          </li></Link>
          <Link href='/'><li className="p-2 text-sm bg-gray-700 cursor-pointer">
            Chargers
          </li></Link>
          <Link href='/'><li className="p-2 text-sm hover:bg-gray-700 cursor-pointer">
            Users
          </li></Link>
          <Link href='/'><li className="p-2 text-sm hover:bg-gray-700 cursor-pointer">
            Vendors
          </li></Link>
          <Link href='/'><li className="p-2 text-sm hover:bg-gray-700 cursor-pointer">
            Reports
          </li></Link>
          <Link href='/'><li className="p-2 text-sm hover:bg-gray-700 cursor-pointer">
            Admin
          </li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
