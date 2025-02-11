import { BsFillPatchCheckFill } from 'react-icons/bs'

interface PropsI {
    title: string;
    subtitle: string;
    price: number;
    features: string[];
}

interface PropsII {
    features: string[];
}

const PlanFeatures = (props: PropsII) => {
    return (
        <div className='p-2 mt-4 border-t-2 border-indigo-500'>
            <h1 className='text-xs italic'>What's included:</h1>
            {props.features.map((feature, index) => (
                <div key={index} className='flex items-center'>
                    <BsFillPatchCheckFill />
                    <p className='text-sm ml-1 mt-1'>{feature}</p>
                </div>
            ))}
        </div>
    );
}

const PricingCard = (props: PropsI) => {
    const {title, subtitle, price, features} = props;

    return (
        <main className='bg-zinc-900 text-zinc-300 w-82 h-[425px] shadow-xl py-4 px-8 flex flex-col justify-center content-center items-center opacity-75 blur-sm hover:opacity-100 hover:blur-none hover:scale-110 transition-all cursor-default'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='italic text-sm font-semibold'>{subtitle}</p>
            </div>
            <div className='text-center text-indigo-500 text-4xl mt-8'>
                <h1>${price.toFixed(2)}/mo</h1>
            </div>
            <div className='mt-8'>
                <PlanFeatures features={features} />
            </div>
            <div className='mt-4 flex justify-center gap-8'>
                <button className='border-2 border-indigo-500 text-lg font-semibold py-1 px-2 hover:bg-indigo-500 hover:scale-110 transition-all cursor-default'>Explore</button>
                <button className='border-2 border-teal-500 text-lg font-semibold py-1 px-2 hover:bg-teal-500 hover:scale-110 transition-all cursor-default'>Enroll</button>
            </div>
        </main>
    );
}

export default PricingCard;