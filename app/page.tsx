import { BsTwitter,BsBell, BsEnvelope, BsBookmark  } from "react-icons/bs";
import { BiHomeCircle,BiHash ,BiUser, BiMoney} from "react-icons/bi";
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

const inter = Inter({subsets:['latin']})
interface TwitterSidebarButton{
  title:string,
  icon: React.ReactNode
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title:'Home',
    icon:<BiHomeCircle/>
  },
  {
    title:'Explore',
    icon:<BiHash/>
  },{
    title:'Notifications',
    icon:<BsBell/>
  },
  {
    title:'Message',
    icon:<BsEnvelope/>
  },
  {
    title:'Bookmarks',
    icon:<BsBookmark/>
  },
  {
    title:"Twitter Blue",
    icon:<BiMoney/>
  },
  
  {
    title:'More Options ',
    icon:<SlOptions/>
  },
  {
    title:'Profile',
    icon:<BiUser/>
  }
]
export default function Home() {
  return (
    <div className={inter.className}>
      
      <div className="grid   grid-cols-12 h-screen w-screen px-56 ">
          <div className="col-span-3 pt-1    ml-16">
            <div className="text-2xl w-fit cursor-pointer transition-all w  hover:bg-gray-800  rounded-full p-2 h-fit ">
            <BsTwitter className=" "/>
            </div>
          <div className="mt-1 text-2  pr-4">
            <ul className="">
            {sidebarMenuItems.map((item) => 
            (<li key={item.title} className="flex mt-2 gap-4  w-fit  justify-start items-center hover:bg-gray-800 rounded-full px-4 py-2 cursor-pointer ">
               <span className="text-2xl" >{item.icon}</span> 
               <span>{item.title}</span> </li>))}
            </ul>
            
            <div className="mt-2 px-3  ">

            <button className="bg-[#1d9bf0] font-semibold w-full text-lg  cursor-pointer py-2 px-2 rounded-full   ">
              Tweet</button>
            </div>
           
          </div>


          </div>
          <div className="col-span-5 h-screen overflow-scroll scroll-smooth border-r-[1px] border-l-[1px] border-gray-400 hide-scrollbar">

            <FeedCard/>

            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>

          </div>
          <div className="col-span-3"></div>


      </div>

    </div>
  );
}
