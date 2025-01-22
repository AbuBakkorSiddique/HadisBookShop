
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



import '../css/Banner.css'

function Banner() {
  return (
<>

<div className="Banner">

    <div className='Banner_sub'>
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <div className='BannerHadis'>
               <div className='BannerHadis_One'>
               <h1> রাসূল (সাল্লাল্লাহু ‘আলাইহি ওয়াসাল্লাম) বলেছেন, ‘তোমাদের মধ্যে সে ব্যক্তিই সর্বপেক্ষা উত্তম,</h1>
               <h1>    যে চরিত্রের দিক দিয়ে উত্তম’ (বুখারী, মুসলিম, মিশকাত হা/৫০৭৫)।</h1>
               </div>
               <div className='BannerHadis_two'>
                <h1> সহিহ ফাযায়েলে আমল: ৮৭</h1>

               </div>
              

         </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='BannerHadis'>
               <div className='BannerHadis_One'>
               <h1> রাসূল (সাল্লাল্লাহু ‘আলাইহি ওয়াসাল্লাম) বলেছেন, ‘তোমাদের মধ্যে সে ব্যক্তিই সর্বপেক্ষা উত্তম,</h1>
               <h1>    যে চরিত্রের দিক দিয়ে উত্তম’ (বুখারী, মুসলিম, মিশকাত হা/৫০৭৫)।</h1>
               </div>
               <div className='BannerHadis_two'>
                <h1> সহিহ ফাযায়েলে আমল: ৮৭</h1>

               </div>
              

         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='BannerHadis'>
               <div className='BannerHadis_One'>
               <h1> রাসূল (সাল্লাল্লাহু ‘আলাইহি ওয়াসাল্লাম) বলেছেন, ‘তোমাদের মধ্যে সে ব্যক্তিই সর্বপেক্ষা উত্তম,</h1>
               <h1>    যে চরিত্রের দিক দিয়ে উত্তম’ (বুখারী, মুসলিম, মিশকাত হা/৫০৭৫)।</h1>
               </div>
               <div className='BannerHadis_two'>
                <h1> সহিহ ফাযায়েলে আমল: ৮৭</h1>

               </div>
              

         </div>
        </SwiperSlide>
  
      </Swiper>
    </div>

</div>




</>
  )
}

export default Banner