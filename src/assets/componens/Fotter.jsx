import '../css/Fotter.css'
import BrandLogo from '../images/Logo.png' ; 
function Fotter() {
  return (
<>

<div className="Fotter">

<footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <button className='btn'>
     <img src={BrandLogo} alt="BrandLogo"  className='BrandLogo'/>
     <h1> আল হাদিস</h1>
    </button>
    <p className='font-bold'>
    হাদিস পড়ুন, শিখুন এবং জানুন
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">নেভিগেট</h6>
    <a className="link link-hover">হাদিস গ্রন্থসমূহ</a>
    <a className="link link-hover">বিষয়ভিত্তিক হাদিস</a>
    <a className="link link-hover">প্রাইভেসি পলিসি</a>
    <a className="link link-hover">সাপোর্ট করুন</a>
  </nav>
  <nav>
    <h6 className="footer-title">আমাদের প্রজেক্ট সমূহ</h6>
    <a className="link link-hover">আল হাদিস</a>
    <a className="link link-hover">কুরআন মাজিদ</a>
    <a className="link link-hover">দোয়া ও রুকিয়াহ</a>
    <a className="link link-hover">আইআরডি ফাউন্ডেশন</a>
  </nav>
  <nav>
    <h6 className="footer-title">জনপ্রিয় সাইটসমূহ</h6>
    <a className="link link-hover">Quran.com</a>
    <a className="link link-hover">Sunnah.com</a>
    <a className="link link-hover">Islamhouse.com</a>
  </nav>
</footer>



</div>



</>
  )
}

export default Fotter