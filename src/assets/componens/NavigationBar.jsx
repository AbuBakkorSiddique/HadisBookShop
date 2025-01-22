import BrandLogo from '../images/Logo.png' ; 
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import '../css/NavigationBar.css'


function NavigationBar() {
  return (
<>
<div className="NavigationBar">
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-emerald-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <li ><a className='hover:bg-emerald-700 hover:text-white'>হোম</a></li>
  
  <li><a className='hover:bg-emerald-700 hover:text-white'> হাদিসে যান</a></li>
  <li><a className='hover:bg-emerald-700 hover:text-white'> হাদিস গ্রন্থসমূহ</a></li>
  <li><a className='hover:bg-emerald-700 hover:text-white'> আমাদের প্রজেক্ট</a></li>
      </ul>
    </div>
 <div className="btn btn-ghost text-xl text-emerald-700">
    <img src={BrandLogo} alt="BrandLogo"  className='BrandLogo'/>
 <a >আল হাদিস</a>
 </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-emerald-700 font-bold" >
      <li ><a className='hover:bg-emerald-700 hover:text-white'>হোম</a></li>
  
      <li><a className='hover:bg-emerald-700 hover:text-white'> হাদিসে যান</a></li>
      <li><a className='hover:bg-emerald-700 hover:text-white'> হাদিস গ্রন্থসমূহ</a></li>
      <li><a className='hover:bg-emerald-700 hover:text-white'> আমাদের প্রজেক্ট</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-emerald-700 text-white hover:bg-green-600"> সাপোর্ট করুন <VolunteerActivismOutlinedIcon/>   </a>
  </div>
</div>



</div>




</>
  )
}

export default NavigationBar