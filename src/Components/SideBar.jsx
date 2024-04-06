import { Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaHtml5,FaBootstrap, FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import './SideBar.css';

export default function SideBar() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Sidebar>
      <Sidebar.Logo
        img="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_b2b52bf26a769b861fae19c5f65643cf/guvi.png"
        imgAlt="Guvi logo"
        className="text-logo font-dms"
      >
        Guvi Docs
      </Sidebar.Logo>
      <form>
      <TextInput
        type="text"
        placeholder="Search..."
        icon={FiSearch}
        className={`rounded-8xl outline-none w-full mb-3 ${
          isFocused ? 'focus:bg-lightG' : ''
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </form>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            icon={FaHtml5}
            label="HTML"
            className="cursor-pointer hover:bg-lightG font-dms rounded-md"
          >
            <Sidebar.Collapse
              label="Elements"
              className="cursor-pointer mx-2 p-2 hover:bg-lightG font-dms rounded-md mt-1"
            />
            <Sidebar.Collapse
              label="Attributes"
              className="cursor-pointer mx-2 p-2 hover:bg-lightG font-dms rounded-md mt-1"
            />
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={IoLogoCss3}
            label="CSS"
            className="cursor-pointer hover:bg-lightG font-dms rounded-md"
          >
            <Sidebar.Collapse
              label="Display"
              className="cursor-pointer mx-2 p-2 hover:bg-lightG font-dms rounded-md mt-1"
            />
            <Sidebar.Collapse
              label="Selectors"
              className="cursor-pointer mx-2 p-2 hover:bg-lightG font-dms rounded-md mt-1"
            />
          </Sidebar.Collapse>
          <Sidebar.Collapse
            icon={RiJavascriptFill}
            label="JavaScript"
            className="cursor-pointer hover:bg-lightG font-dms rounded-md"
          >
            <Sidebar.Collapse
              label="String"
              className="cursor-pointer mx-2 p-2 hover:bg-lightG font-dms rounded-md mt-1"
            />
            <Sidebar.Collapse
              label="Arrays"
              className="cursor-pointer mx-2 p-2 hover:bg-lightG font-dms rounded-md mt-1"
            />
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            icon={FaBootstrap}
            label="BootStrap"
            className="cursor-pointer hover:bg-lightG rounded-md"
          ></Sidebar.Collapse>
          <Sidebar.Collapse
            icon={FaReact}
            label="ReactJS"
            className="cursor-pointer hover:bg-lightG rounded-md"
          ></Sidebar.Collapse>
          <Sidebar.Collapse
            icon={FaNodeJs}
            label="NodeJS"
            className="cursor-pointer hover:bg-lightG rounded-md"
          ></Sidebar.Collapse>
          <Sidebar.Collapse
            icon={SiExpress}
            label="ExpressJS"
            className="cursor-pointer hover:bg-lightG rounded-md"
          ></Sidebar.Collapse>
          <Sidebar.Collapse
            icon={DiMongodb}
            label="MongoDB"
            className="cursor-pointer hover:bg-lightG rounded-md"
          ></Sidebar.Collapse>
          <Sidebar.Collapse
            icon={SiMysql}
            label="MySQL"
            className="cursor-pointer hover:bg-lightG rounded-md"
          ></Sidebar.Collapse>
          <Sidebar.Collapse
            icon={FaAws}
            label="AWS"
            className="cursor-pointer hover:bg-lightG rounded-md"
          ></Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
