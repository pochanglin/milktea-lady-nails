import LucideIcon from './LucideIcon.jsx';

const Header = ({ activeTab, onTabChange }) => {
    return (
        <div className="bg-[#8E735B] pt-12 text-center text-white">
            <h1 className="text-[19px] font-serif-custom tracking-[0.22em] mb-2 uppercase text-[#EBD9D9]">MILKTEA.LADY_ NAIL</h1>
            <p className="text-[10px] tracking-[0.4em] opacity-60 italic uppercase mb-8">Studio Menu</p>

            <div className="flex px-10 gap-2">
                <button
                    onClick={() => onTabChange('rules')}
                    className={`flex-1 py-3 rounded-t-2xl text-[12px] tracking-widest font-bold transition-all duration-300 
                    ${activeTab === 'rules'
                            ? 'bg-[#F2EDE7] text-[#8E735B]'
                            : 'bg-[#6B5A4D] text-[#E5DCD3] opacity-80'}`}
                >
                    預約須知
                </button>
                <button
                    onClick={() => onTabChange('price')}
                    className={`flex-1 py-3 rounded-t-2xl text-[12px] tracking-widest font-bold transition-all duration-300 
                    ${activeTab === 'price'
                            ? 'bg-[#F2EDE7] text-[#8E735B]'
                            : 'bg-[#6B5A4D] text-[#E5DCD3] opacity-80'}`}
                >
                    價目預約
                </button>
            </div>
        </div>
    );
};

export default Header;