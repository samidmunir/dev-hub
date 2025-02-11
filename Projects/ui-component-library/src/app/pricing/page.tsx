import PricingCard from '@/components/PricingCard'

const pricingCards = [
    {
        title: 'Free',
        subtitle: 'Get started with the essentials',
        price: 0.00,
        features: [
            'Basic UI Components (Buttons, Inputs, Cards)',
            'Open Source License',
            'Community Support',
            'Regular Updates',
            'Basic Theming Options',
        ]
    },
    {
        title: 'Personal',
        subtitle: 'For developers and freelancers',
        price: 25.00,
        features: [
            'Access to All Core UI Components',
            'Advanced Theming & Customization',
            'Responsive Design Support',
            'Email Support',
            'Component Documentation & Examples',
        ]
    },
    {
        title: 'Professional',
        subtitle: 'For teams and businesses',
        price: 50.00,
        features: [
            'Access to Pro & Enterprise Components',
            'Figma Design & System Integration',
            'Priority Support & Feature Requests',
            'Custom Branding & White Labeling',
            'API Access & Custom Plugins',
        ]
    }
]

const Pricing = () => {
    return (
        <main className='px-8 py-2 bg-zinc-300'>
            <div>
                <h1 className='text-center text-4xl font-bold'>Pricing Plan</h1>
                <p className='text-center italic'>Choose the right one for you!</p>
            </div>
            <section className='flex justify-between mt-4'>
                {
                    pricingCards.map((card, index) => (
                        <PricingCard key={index} {...card} />
                    ))
                }
            </section>
            <div></div>
        </main>
    );
}

export default Pricing;