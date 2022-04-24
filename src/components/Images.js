import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'

export default function Images() {
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-8 md:py-32 px-4 md:px-36'>
            <img src={img1} alt = 'img1' className='w-full h-full object-cover' />
            <img src={img2} alt = 'img1' className='w-full h-full object-cover' />
            <img src={img3} alt = 'img1' className='w-full h-full object-cover bg-center' />
            <img src={img4} alt = 'img1' className='w-full h-full object-cover' />
            <img src={img5} alt = 'img1' className='w-full h-full object-cover' />
            <img src={img6} alt = 'img1' className='w-full h-full object-cover' />
        </div>
    )
}