import { TimelineDemo } from '@/components/Events'
import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

const Events = () => {
  return (
    <>
    <Navbar className='bg-black/70' />
    <TimelineDemo />
    <Footer />
    </>
  )
}

export default Events