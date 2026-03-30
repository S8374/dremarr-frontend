import React from 'react';
import { Plus, Mail, CheckCircle } from 'lucide-react';

const TradingSteps = () => {
    const steps = [
        {
            number: '01',
            icon: <Plus className="w-6 h-6" />,
            title: 'Post your skill',
            description: 'Create a listing showcasing what you offer or what you\'re looking for. Add details, images, and your availability to attract the right matches.'
        },
        {
            number: '02',
            icon: <Mail className="w-6 h-6" />,
            title: 'Connect & Negotiate',
            description: 'Browse listings, message members, and discuss the details of your exchange. Our secure messaging keeps all conversations organized.'
        },
        {
            number: '03',
            icon: <CheckCircle className="w-6 h-6" />,
            title: 'Complete the Barter',
            description: 'Exchange your skills, complete the agreed services, and leave reviews. Build your reputation and unlock more opportunities.'
        }
    ];

    return (
        <div className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                        Start Trading in Three Steps
                    </h1>
                    <p className="text-base text-gray-500 sm:text-lg">
                        No complicated setup. Just creat, connect, and exchange.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-gray-50 p-6 transition-shadow duration-300 hover:shadow-lg sm:p-8"
                        >
                            {/* Number and Icon */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-5xl font-bold text-gray-200">
                                    {step.number}
                                </span>
                                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                                    {step.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TradingSteps;
