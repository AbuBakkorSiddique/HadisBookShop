




import '../css/HomeHeroSection.css';
import HeroRightImage from '../images/Sheep.png' ; 
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import HeroSectionArabicImage from '../images/Group 1171274965.png';
import Typewriter from 'typewriter-effect';





function HomeHeroSection() {
  return (
 <>
 
 <div className="HomeHeroSection">
<div className='HomeHeroSection_Sub'>


{/*-----------   left side --------------*/} 
<div className='HomeHeroSection_Sub_left'>

<div className='HomeHeroSection_Sub_left_one'>
 <img src={HeroSectionArabicImage} alt="HeroSectionArabicImage" className='HeroSectionArabicImage' />
</div>
<div className='HomeHeroSection_Sub_left_two'>
  <h1 className='text-white text-2xl'> 
    
    
  <Typewriter
  options={{
    strings: ['আপনার পছন্দের হাদিস খুঁজুন'],
    autoStart: true,
    loop: true,
  }}
/>
    
    
    
    </h1>
</div>
<div className='HomeHeroSection_Sub_left_three'>

    <div className='HomeHeroSection_Sub_left_three_Main'>
        <div className='HomeHeroSection_Sub_left_three_Main_input'>
            <input type="text " placeholder='এখানে লিখুন...' />
        </div>
        <div className='HomeHeroSection_Sub_left_three_Main_SearchButton'> 
           <button className='btn bg-emerald-700 border-0 hover:bg-emerald-800 text-white'>
               <SearchOutlinedIcon/>   <h1>সার্চ করুন</h1>
           </button>
        </div>

    </div>

</div>
<div className='HomeHeroSection_Sub_left_four'>

{/*------- carosule -------------*/}
<div className="carousel  h-full">
  <div id="item1" className="carousel-item w-full heroCarosuleIteam1 text-white" >
   <h1>তিনি বলেন, রাসূলুল্লাহ্ (সাঃ) বলেছেন : কোন মুসলিম যখন উত্তমরূপে উযূ করে একাগ্রচিত্তে আল্লাহর দিকে রুজু হয়ে দাঁড়িয়ে দুই রাক’আত সলাত আদায় করে তার জন্য জান্নাত অবধারিত হয়ে যায়। </h1>
   <h1> [সহিহ ফাযায়েলে আমল: ৮৭]</h1>
  </div>
  <div id="item2" className="carousel-item w-full heroCarosuleIteam1 text-white">
  <h1>তিনি বলেন, রাসূলুল্লাহ্ (সাঃ) বলেছেন : যে ব্যক্তি নিয়মিত তাহাজ্জুদ পড়ে, আল্লাহ্ তার জন্য জান্নাতের দরজাগুলো সহজ করে দেন।</h1>  
  <h1>[সহিহ বুখারী: ১১৭৪]</h1>
  </div>
  <div id="item3" className="carousel-item w-full heroCarosuleIteam1 text-white">
  <h1>তিনি বলেন, রাসূলুল্লাহ্ (সাঃ) বলেছেন : যে ব্যক্তি তার পিতামাতার সেবা করে তাদের দুআ লাভ করে, সে জান্নাত লাভ করবে।</h1>  
  <h1>[সহিহ মুসলিম: ২৫৪৮]</h1>
  </div>
  <div id="item4" className="carousel-item w-full heroCarosuleIteam1 text-white">
  <h1>তিনি বলেন, রাসূলুল্লাহ্ (সাঃ) বলেছেন : যে ব্যক্তি অন্য মুসলিমের জন্য দুআ করে, আল্লাহ তার জন্য সেই একই দুআ কবুল করেন।</h1>  
  <h1>[সহিহ তিরমিজি: ১৯৮]</h1>
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>




</div>

</div>

{/*-----------   right side --------------*/} 
<div className='HomeHeroSection_Sub_right'>
    <img src={HeroRightImage} alt="HeroRightImage"  className='HeroRightImage'/>

</div>






</div>


 </div>
 
 
 </>
  )
}

export default HomeHeroSection