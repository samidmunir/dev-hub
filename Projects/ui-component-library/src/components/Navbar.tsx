import { BsDiagram3Fill, BsAppIndicator, BsBoxSeamFill, BsCurrencyDollar, BsFillChatLeftDotsFill } from 'react-icons/bs'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='bg-zinc-900'>
            <div className='flex text-zinc-300'>
                <BsDiagram3Fill className='text-4xl' />
                <h1 className='text-3xl ml-2'>UI/UX Components</h1>
            </div>
            <div className='flex gap-4'>
                <Link href='/' className='flex items-center text-zinc-300'>
                    <BsAppIndicator className='text-xl' />
                    <p className='text-xl ml-1'>Overview</p>
                </Link>
                <Link href='/' className='flex items-center text-zinc-300'>
                    <BsBoxSeamFill className='text-xl' />
                    <p className='text-xl ml-1'>Components</p>
                </Link>
                <Link href='/' className='flex items-center text-zinc-300'>
                    <BsCurrencyDollar className='text-xl' />
                    <p className='text-xl ml-1'>Pricing</p>
                </Link>
                <Link href='/' className='flex items-center text-zinc-300'>
                    <BsFillChatLeftDotsFill className='text-xl' />
                    <p className='text-xl ml-1'>Testimonials</p>
                </Link>
            </div>
            <div>
                <input type='email' />
                <button className='border-2 border-indigo-500 text-indigo-500 py-1 px-2'>Subscribe</button>
            </div>
        </nav>
    );
}

export default Navbar;