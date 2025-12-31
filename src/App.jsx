import { useState } from 'react';
import Header from './components/UI/Header.jsx';
import RulesTab from './components/Tabs/RulesTab.jsx';
import PriceTab from './components/Tabs/PriceTab.jsx';
import SummaryModal from './components/UI/SummaryModal.jsx';
import { useBooking } from './hooks/useBooking.js';

const App = () => {
    const [activeTab, setActiveTab] = useState('rules');
    const [showSummary, setShowSummary] = useState(false);
    const bookingState = useBooking();

    return (
        <div className="min-h-screen flex flex-col items-center p-4 bg-[#E5DCD3] pb-12">
            <div className="w-full max-w-md bg-[#F2EDE7] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/40">
                <Header activeTab={activeTab} onTabChange={setActiveTab} />

                {activeTab === 'rules' && (
                    <RulesTab onSwitchToPrice={() => setActiveTab('price')} />
                )}

                {activeTab === 'price' && (
                    <PriceTab bookingState={bookingState} onShowSummary={() => setShowSummary(true)} />
                )}

                <footer className="py-6 text-center text-[9px] tracking-[0.6em] text-[#8E735B] uppercase font-black opacity-30">Milktea.Lady_ Nail Studio</footer>
            </div>

            {showSummary && (
                <SummaryModal bookingState={bookingState} onClose={() => setShowSummary(false)} />
            )}
        </div>
    );
};

export default App;