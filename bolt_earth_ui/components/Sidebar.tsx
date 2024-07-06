import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-30 bg-[#272727] text-white flex flex-col">
      <div className="p-4 flex items-center">
        <Image 
          src="/link-thumbnail.png" 
          alt="Bolt Earth Logo" 
          width={80} 
          height={80} 
          className="mr-2"
        />
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <Link href='/'><li className="p-2 text-xs hover:bg-gray-700 cursor-pointer">
            Overview
          </li></Link>
          <Link href='/chargers'><li className="p-2 text-xs bg-gray-700 cursor-pointer">
            Chargers
          </li></Link>
          <Link href='/users'><li className="p-2 text-xs hover:bg-gray-700 cursor-pointer">
            Users
          </li></Link>
          <Link href='/vendors'><li className="p-2 text-xs hover:bg-gray-700 cursor-pointer">
            Vendors
          </li></Link>
          <Link href='/kyc'><li className="p-2 text-xs hover:bg-gray-700 cursor-pointer">
            KYC
          </li></Link>
          <Link href='/reports'><li className="p-2 text-xs hover:bg-gray-700 cursor-pointer">
            Reports
          </li></Link>
          <Link href='/admin'><li className="p-2 text-xs hover:bg-gray-700 cursor-pointer">
            Admin
          </li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
