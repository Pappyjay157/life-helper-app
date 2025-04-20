import { Tag, Lightbulb, User, Briefcase, Mic, Home as HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const menu = [
    { icon: <Tag className="h-10 w-10 text-blue-600" />, label: "Market Prices", path: "/market-prices" },
    { icon: <Lightbulb className="h-10 w-10 text-blue-600" />, label: "Business Ideas", path: "/business-ideas" },
    { icon: <User className="h-10 w-10 text-blue-600" />, label: "Money Tracker", path: "#" },
    { icon: <Briefcase className="h-10 w-10 text-blue-600" />, label: "Job Help", path: "#" },
  ];

  return (
    <div className="flex flex-col items-center justify-between min-h-screen w-full bg-white px-4 py-6">
      {/* Blue Header */}
      <div className="w-full bg-blue-600 py-4 mb-6 shadow">
        <h1 className="text-white text-2xl font-bold text-center">Life Helper App</h1>
      </div>
  
      {/* Grid Menu */}
      <div className="grid grid-cols-2 gap-6 w-full max-w-sm mb-10">
        {menu.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center justify-center bg-white rounded-2xl shadow p-6 text-center border border-gray-200 hover:shadow-md"
          >
            {item.icon}
            <span className="mt-3 text-base font-semibold text-[#1a1a1a]">{item.label}</span>
          </button>
        ))}
      </div>
  
      {/* Voice Button */}
      <button className="bg-blue-600 p-4 rounded-full text-white shadow mb-10">
        <Mic className="h-6 w-6" />
      </button>
  
      {/* Bottom Navigation */}
      <div className="w-full max-w-sm border-t pt-3 flex justify-center">
        <button className="flex flex-col items-center text-blue-600">
          <HomeIcon className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </button>
      </div>
    </div>
  );
   
}
