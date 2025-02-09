import { ImStatsDots } from "react-icons/im";

function Nav(){
    return <header className="container max-w-2xl px-6 py-6 mx-auto">
    <div className="flex items-center justify-between"> 
     {/*User informaton*/}
     <div className="flex items-center gap-2">
     <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
       {/*img*/}
       <img
       className="object-cover w-full h-full" 
       src="https://via.placeholder.com/150"
       alt="profile image" />

       {/*User name*/}
       <small> Hi, John Doe</small>
     </div>
     </div>

     {/*right side of our navigation*/}
     <nav className="flex items-center gap-4">
       <div><ImStatsDots className="text-2xl"/></div>
       <div>
         <button className="btn btn-danger">Sign Out </button>
       </div>
     </nav>
     </div>
   </header>
}
export default Nav;