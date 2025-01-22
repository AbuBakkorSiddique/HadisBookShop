import '../css/CatagoryOne.css'

/*--------images ----------*/
import Cone  from '../images/image 29.png'; 
import Ctwo from '../images/image2.png' ;
import  Cthree from '../images/image3.png';
import Cfour from '../images/image4.png';
import Cfive from '../images/image5.png';
import Csix from '../images/image6.png';
import Cseven from '../images/image7.png'



function CatagoryOne() {
  return (
<>
<div className="CatagoryOne">

<div className='CatagoryOne_Divone'>
    <h1 className='text-2xl mt-5 font-bold'> হাদিসের <span className='text-emerald-600'>  বইসমূহ</span></h1>
    <h1> হাদিসের কিতাবগুলো মুসলিমদের জন্য হেদায়েত এবং অনুপ্রেরণার একটি গুরুত্বপূর্ণ উৎস। এই কিতাবগুলো মহানবী</h1>
      <h1>মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া সালাম)-এর সীরাত(জীবনী) ও দিক-নির্দেশনার প্রতি অন্তর্দৃষ্টি প্রদান করে। </h1>   

</div>
<div className='CatagoryOne_Divtwo'>
    <div className='CatagoryOne_Divtwo_Sub'>

        <div className='CatagoryOne_Divtwo_Sub_firstRow'>
            <div className='catagoryoneMain shadow-2xl hover:shadow-md transition-shadow duration-300 ease-in-out'>
                  <div>
                    <img src={Cone} alt="Cone" className='Cone' />
                  </div>
                  <div>
                     <h1 className='text-emerald-600 font-bold'> সহিহ বুখারী</h1>
                  </div>
                  <div>
                    <h1 className='text-emerald-600'> হাদিসের রেঞ্জ:৭৫৬৩</h1>
                  </div>
            </div>
            <div className='catagoryoneMain shadow-2xl hover:shadow-md transition-shadow duration-300 ease-in-out'>
            <div>
            <img src={Ctwo} alt="Ctwo" className='Ctwo' />
                  </div>
                  <div>
                     <h1 className='text-emerald-600 font-bold'> সহিহ মুসলিম</h1>
                  </div>
                  <div>
                    <h1 className='text-emerald-600'> হাদিসের রেঞ্জ:৭৪৫৩</h1>
                  </div>
            </div>
            <div className='catagoryoneMain shadow-2xl hover:shadow-md transition-shadow duration-300 ease-in-out'>
            <div>
            <img src={Cthree} alt="Cthree" className='Cthree' />
                  </div>
                  <div>
                     <h1 className='text-emerald-600 font-bold'> সুনানে আন-নাসায়ী</h1>
                  </div>
                  <div>
                    <h1 className='text-emerald-600'> হাদিসের রেঞ্জ:৫৭৫৮</h1>
                  </div>
            </div>
            <div className='catagoryoneMain shadow-2xl hover:shadow-md transition-shadow duration-300 ease-in-out'>
            <div>
            <img src={Cfour} alt="Cfour" className='Cfour' />
                  </div>
                  <div>
                     <h1 className='text-emerald-600 font-bold'> সুনানে আবু দাউদ</h1>
                  </div>
                  <div>
                    <h1 className='text-emerald-600'> হাদিসের রেঞ্জ:৫২৭৪</h1>
                  </div>
            </div>

        </div>
        <div className='CatagoryOne_Divtwo_Sub_secondRow'>
        <div className='catagoryoneMain shadow-2xl hover:shadow-md transition-shadow duration-300 ease-in-out'>
                  <div>
                  <img src={Cfive} alt="Cfive" className='Cfive' />
                  </div>
                  <div>
                     <h1 className='text-emerald-600 font-bold'> জামে আত-তিরমিজি</h1>
                  </div>
                  <div>
                    <h1 className='text-emerald-600'> হাদিসের রেঞ্জ:৩৯৫৬</h1>
                  </div>
            </div>
            <div className='catagoryoneMain shadow-2xl hover:shadow-md transition-shadow duration-300 ease-in-out'>
            <div>
            <img src={Csix} alt="Csix" className='Csix' />
                  </div>
                  <div>
                     <h1 className='text-emerald-600 font-bold'> সুনানে ইবনে মাজাহ</h1>
                  </div>
                  <div>
                    <h1 className='text-emerald-600'> হাদিসের রেঞ্জ:৪৩৪১</h1>
                  </div>
            </div>
            <div className='catagoryoneMain shadow-2xl hover:shadow-md transition-shadow duration-300 ease-in-out'>
            <div>
            <img src={Cseven} alt="Cseven" className='Cseven' />
                  </div>
                  <div>
                     <h1 className='text-emerald-600 font-bold'> মুয়াত্তা ইমাম মালিক</h1>
                  </div>
                  <div>
                    <h1 className='text-emerald-600'> হাদিসের রেঞ্জ:১৮৩২</h1>
                  </div>
            </div>
            <div className='catagoryoneMain shadow-2xl hover:shadow-md transition-shadow duration-300 ease-in-out'>
            <div>
            <img src={Cone} alt="Cone" className='Cone' />
                  </div>
                  <div>
                     <h1 className='text-emerald-600 font-bold'> বুলুগুল মারাম</h1>
                  </div>
                  <div>
                    <h1 className='text-emerald-600'> হাদিসের রেঞ্জ:১৯০৫</h1>
                  </div>
            </div>
        </div>

    </div>

</div>



</div>






</>
  )
}

export default CatagoryOne