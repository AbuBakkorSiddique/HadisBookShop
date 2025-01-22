import '../css/Download.css';


import Apple from '../images/App store - Available on the app store.png'
import Google from '../images/Google play_dark - Get in on Google play.png';
import MobileImage from '../images/image 37.png'

function Download() {
  return (
<>

<div className="Download">


   <div className='Download_Sub h-screen pt-5 pb-5'>

    <div className='Download_Sub_one flex w-full '>
        <div className='Download_Sub_one_one text-2xl font-bold '>
          <h1> ডাউনলোড করুন  </h1>
             <h1>   আল হাদিস মোবাইল অ্যাপ</h1>
        </div>
        <div className='Download_Sub_one_two'>
            <h1>
            আল হাদিস অ্যাপের মাধ্যমে, হাদিস পড়া, বুকমার্ক, অনলাইন সিংকিং সহ আরও অনেক  </h1>
           <h1>  কিছু সহজেই পারবেন। এখনই আমাদের অ্যাপটি ডাউনলোড করুন!</h1>
           

        </div>
        <div className='Download_Sub_one_three'>

            <div>
                <img src={Apple} alt="Apple" className='Apple' />
            </div>
            <div>
                <img src={Google} alt="Google" className='Google' />
            </div>
            

        </div>

    </div>



    <div className='Download_Sub_two'>
    <img src={MobileImage} alt="MobileImage"  className='MobileImage'/>
    </div>

   </div>


</div>




</>
  )
}

export default Download