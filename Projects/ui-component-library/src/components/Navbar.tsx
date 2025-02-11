'use client'
import { BsDiagram3Fill, BsAppIndicator, BsBoxSeamFill, BsCurrencyDollar, BsFillChatLeftDotsFill } from 'react-icons/bs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    {
        icon: <BsAppIndicator />,
        href: '/',
        label: 'Overview',
    },
    {
        icon: <BsBoxSeamFill />,
        href: '/components',
        label: 'Components',
    },
    {
        icon: <BsCurrencyDollar />,
        href: '/pricing',
        label: 'Pricing',
    },
    {
        icon: <BsFillChatLeftDotsFill />,
        href: '/testimonials',
        label: 'Testimonials',
    },
]

interface Props {
    icon: React.ReactNode;
    href: string;
    label: string;
}

const NavLink = (props: Props) => {
    const pathname = usePathname();

    return (
        <Link href={props.href} className={`flex items-center border-t-2 ${props.href === pathname ? 'text-indigo-500' : 'text-zinc-300'} ${props.href === pathname ? 'border-indigo-500' : 'border-zinc-900'} hover:text-indigo-500 hover:border-indigo-500 hover:scale-110 transition-all cursor-default`}>
            <span className='text-lg'>{props.icon}</span>
            <p className='text-lg ml-2'>{props.label}</p>
        </Link>
    );
}

const Navbar = () => {
    return (
        <nav className='bg-zinc-900 flex justify-between px-8 py-2'>
            <div className='flex text-zinc-300 border-t-2 border-b-2 border-indigo-500'>
                <BsDiagram3Fill className='text-3xl text-indigo-500' />
                <h1 className='text-2xl ml-2'>UI/UX Components</h1>
            </div>
            <div className='flex gap-8'>
                {
                    navLinks.map((link, index) => (
                        <NavLink key={index} icon={link.icon} href={link.href} label={link.label} />
                    ))
                }
            </div>
            <div className='flex'>
                <input type='email' placeholder='Your email' className='bg-zinc-800 placeholder:text-indigo-500 placeholder:text-lg placeholder:font-semibold px-2 focus:outline-none text-indigo-500 text-lg' />
                <button className='border-2 border-indigo-500 text-indigo-500 py-1 px-2 font-semibold hover:bg-indigo-500 hover:text-zinc-300 hover:scale-110 transition-all cursor-default'>Subscribe</button>
            </div>
        </nav>
    );
}

export default Navbar;