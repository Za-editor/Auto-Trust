import React, { useState } from "react";
import {
  FiGrid,
  FiCheckCircle,
  FiTool,
  FiDollarSign,
  FiClock,
  FiSettings,
  FiHelpCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const menu = [
  { key: "dashboard", label: "Dashboard", icon: <FiGrid /> },
  { key: "verified", label: "Verified Mechanics", icon: <FiCheckCircle /> },
  { key: "spare", label: "Spare Parts and Price", icon: <FiTool /> },
  { key: "estimator", label: "Repair Estimator", icon: <FiDollarSign /> },
  { key: "history", label: "Service History", icon: <FiClock /> },
];

const popular = [
  "Brakes",
  "Batteries",
  "Engines",
  "Tyres",
  "Lights",
  "AC/Heating",
];

export default function Sidebar({ current, setCurrent }) {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`bg-white border-r h-screen transition-width duration-300 ${
        open ? "w-64" : "w-20"
      }`}
    >
      {/* top area */}
      <div className="h-16 flex items-center px-4 border-b">
        <button
          onClick={() => setOpen((v) => !v)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          {open ? <FiChevronLeft /> : <FiChevronRight />}
        </button>
        {open && <span className="ml-3 font-semibold text-gray-700">Menu</span>}
      </div>

      {/* menu items */}
      <nav className="px-2 py-4">
        {menu.map((m) => {
          const active = current === m.key;
          return (
            <button
              key={m.key}
              onClick={() => setCurrent(m.key)}
              className={`w-full flex items-center gap-3 px-3 py-3 mb-1 rounded-md text-sm ${
                active
                  ? "bg-[#1E73D8] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span
                className={`text-lg ${
                  active ? "text-white" : "text-[#1E73D8]"
                }`}
              >
                {m.icon}
              </span>
              <span className={`${!open && "hidden"} font-medium`}>
                {m.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="px-4 mt-4">
        {open && (
          <h4 className="text-gray-700 font-semibold mb-2">Popular Services</h4>
        )}
        <ul className="space-y-2">
          {popular.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <span className="text-[#1E73D8] text-lg">●</span>
              <span className={`${!open && "hidden"} text-sm text-gray-700`}>
                {p}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto px-4 py-6">
        <button
          className={`w-full flex items-center gap-3 px-3 py-3 rounded-md ${
            open ? "text-gray-700 hover:bg-gray-100" : "justify-center"
          }`}
        >
          <FiSettings />
          <span className={`${!open && "hidden"}`}>Settings</span>
        </button>
        <button
          className={`w-full flex items-center gap-3 px-3 py-3 mt-2 rounded-md ${
            open ? "text-gray-700 hover:bg-gray-100" : "justify-center"
          }`}
        >
          <FiHelpCircle />
          <span className={`${!open && "hidden"}`}>Help</span>
        </button>
      </div>
    </aside>
  );
}
