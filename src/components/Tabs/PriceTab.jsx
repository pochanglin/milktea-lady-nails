import { useState } from 'react';
import LucideIcon from '../UI/LucideIcon.jsx';
import { PRICES, ADD_ONS_CONFIG } from '../../data/prices.js';

const PriceTab = ({ bookingState, onShowSummary }) => {
    const {
        style, setStyle,
        removal, setRemoval,
        extensionCount, setExtensionCount,
        repairCount, setRepairCount,
        addOns, updateAddOns,
        discounts, updateDiscounts,
        booking, updateBooking,
        availableTimes,
        totalPrice
    } = bookingState;

    const [agreed, setAgreed] = useState(false);

    const handleDateChange = (e) => {
        const selected = e.target.value;
        const today = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
        const finalDate = selected < today ? today : selected;
        updateBooking({ date: finalDate, time: '' });
    };

    return (
        <div className="p-8 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <section>
                <h2 className="text-[12px] font-bold tracking-widest text-[#6B5A4D] mb-4 flex items-center justify-between border-b border-[#D4A5A5]/30 pb-2">
                    I. 款式選擇 STYLE <LucideIcon name="heart" className="text-[#A66E6E]" />
                </h2>
                <div className="grid grid-cols-2 gap-3">
                    {PRICES.styles.map(item => (
                        <button key={item.id} onClick={() => setStyle(item.id)} className={`p-4 rounded-2xl border transition-all ${style === item.id ? 'bg-[#EBD9D9] border-[#A66E6E]' : 'bg-[#EAE2D9] border-transparent opacity-80'}`}>
                            <div className="text-[10px] font-bold mb-1">{item.name}</div>
                            <div className="text-sm font-black text-[#4A3B32]">${item.price}</div>
                        </button>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-[12px] font-bold tracking-widest text-[#6B5A4D] mb-4 flex items-center justify-between border-b border-[#D4A5A5]/30 pb-2">
                    II. 卸甲服務 REMOVAL <LucideIcon name="eraser" className="text-[#A66E6E]" />
                </h2>
                <div className="space-y-2">
                    {PRICES.removal.map(item => (
                        <button key={item.id} onClick={() => setRemoval(item.id)} className={`w-full px-5 py-3 rounded-xl border flex justify-between items-center transition-all ${removal === item.id ? 'bg-[#EBD9D9] border-[#A66E6E]' : 'bg-[#EAE2D9]/60 border-transparent opacity-80'}`}>
                            <span className="text-[11px] font-bold">{item.name}</span>
                            <span className="text-sm font-bold">${item.price}</span>
                        </button>
                    ))}
                </div>
            </section>

            <section className="bg-[#EAE2D9]/40 p-5 rounded-[2rem] border border-[#D4A5A5]/10 space-y-4">
                <h2 className="text-[11px] font-bold text-[#8C4A4A] flex justify-between items-center px-1">
                    ADD-ONS 加購細項 <LucideIcon name="sparkles" size={14} />
                </h2>
                {ADD_ONS_CONFIG.map(item => (
                    <div key={item.key} className="flex items-center justify-between bg-white/40 p-2 pl-4 rounded-full border border-white/20">
                        <div className="flex flex-col">
                            <span className="text-[11px] font-bold">{item.label}</span>
                            <span className="text-[9px] text-[#A66E6E] font-bold">${item.price}/指</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={() => updateAddOns(item.key, addOns[item.key] - 1)} className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center font-bold">-</button>
                            <span className="text-sm font-black w-4 text-center">{addOns[item.key]}</span>
                            <button onClick={() => updateAddOns(item.key, addOns[item.key] + 1)} className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center font-bold">+</button>
                        </div>
                    </div>
                ))}
            </section>

            <section>
                <h2 className="text-[12px] font-bold tracking-widest text-[#6B5A4D] mb-4 flex items-center justify-between border-b border-[#D4A5A5]/30 pb-2">
                    IV. 延甲與補甲 SERVICE <LucideIcon name="shield-check" className="text-[#A66E6E]" />
                </h2>
                <div className="space-y-3">
                    <div className="bg-[#EAE2D9]/80 px-6 py-3 rounded-2xl flex items-center justify-between border border-[#D4A5A5]/10">
                        <span className="text-[11px] font-bold">補甲 <span className="text-[#A66E6E] ml-1">$100/指</span></span>
                        <div className="flex items-center gap-4">
                            <button onClick={() => setRepairCount(Math.max(0, repairCount - 1))} className="text-[#A66E6E] font-bold p-1">-</button>
                            <span className="text-sm font-black w-4 text-center">{repairCount}</span>
                            <button onClick={() => setRepairCount(Math.min(10, repairCount + 1))} className="text-[#A66E6E] font-bold p-1">+</button>
                        </div>
                    </div>
                    <div className="bg-[#EAE2D9]/80 px-6 py-3 rounded-2xl flex items-center justify-between border border-[#D4A5A5]/10">
                        <span className="text-[11px] font-bold">延甲 <span className="text-[#A66E6E] ml-1">$150/指</span></span>
                        <div className="flex items-center gap-4">
                            <button onClick={() => setExtensionCount(Math.max(0, extensionCount - 1))} className="text-[#A66E6E] font-bold p-1">-</button>
                            <span className="text-sm font-black w-4 text-center">{extensionCount}</span>
                            <button onClick={() => setExtensionCount(Math.min(10, extensionCount + 1))} className="text-[#A66E6E] font-bold p-1">+</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white/40 p-6 rounded-[2rem] border border-[#A66E6E]/20 space-y-4">
                <h2 className="text-[12px] font-bold tracking-widest text-[#6B5A4D] mb-2 flex items-center justify-between border-b border-[#D4A5A5]/30 pb-2">
                    預約時段 BOOKING <LucideIcon name="calendar" className="text-[#A66E6E]" />
                </h2>
                <div className="space-y-3">
                    <input
                        type="text"
                        placeholder="顧客姓名"
                        value={booking.name}
                        onChange={e => updateBooking({ name: e.target.value })}
                        className="w-full h-11 bg-[#EAE2D9]/50 border-none rounded-xl px-4 py-3 text-sm outline-none shadow-inner appearance-none"
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                            <input
                                type="date"
                                min={new Date().toLocaleDateString('en-CA')}
                                value={booking.date}
                                onChange={handleDateChange}
                                className={`w-full h-11 bg-[#EAE2D9]/50 border-none rounded-xl px-3 text-sm outline-none cursor-pointer appearance-none flex items-center
                                [&::-webkit-calendar-picker-indicator]:opacity-0 
                                [&::-webkit-calendar-picker-indicator]:absolute 
                                [&::-webkit-calendar-picker-indicator]:w-full 
                                [&::-webkit-calendar-picker-indicator]:h-full
                                ${!booking.date ? "text-transparent" : "text-black"}
                                ${!booking.date ? "before:content-['選擇日期'] before:text-gray-400 before:absolute" : ""}
                            `}
                            />
                            {!booking.date && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <LucideIcon name="calendar" size={16} />
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <select
                                disabled={!booking.date || availableTimes[0] === "CLOSED"}
                                value={booking.time}
                                onChange={e => updateBooking({ time: e.target.value })}
                                className="w-full h-11 bg-[#EAE2D9]/50 border-none rounded-xl px-3 text-sm outline-none appearance-none pr-8"
                            >
                                {!booking.date ? <option>選擇時段</option> : availableTimes[0] === "CLOSED" ? <option>週五不開放</option> : <><option value="">時段</option>{availableTimes.map(t => <option key={t} value={t}>{t}</option>)}</>}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                <LucideIcon name="chevron-down" size={14} />
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => updateDiscounts('customerBirthday', !discounts.customerBirthday)}
                        className={`w-full h-10 px-4 rounded-xl flex items-center justify-between transition-colors ${discounts.customerBirthday ? 'bg-[#A66E6E] text-white' : 'bg-[#FAF9F7] text-[#6B5A4D]'}`}
                    >
                        <span className="text-[10px] font-bold uppercase">當月壽星 (折$100)</span>
                        {discounts.customerBirthday && <LucideIcon name="check" size={14} />}
                    </button>
                </div>
            </section>

            <div
                onClick={() => setAgreed(!agreed)}
                className="flex items-center justify-center gap-3 cursor-pointer group py-2"
            >
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${agreed ? 'bg-[#8E735B] border-[#8E735B]' : 'border-[#D4A5A5] bg-white'}`}>
                    {agreed && <LucideIcon name="check" size={14} className="text-white" />}
                </div>
                <span className={`text-[11px] font-bold tracking-wider ${agreed ? 'text-[#8E735B]' : 'text-[#A66E6E]'}`}>
                    我已確認並同意「預約須知」內容
                </span>
            </div>

            <div className="pb-4">
                <button onClick={onShowSummary} disabled={!agreed || totalPrice === 0 || !booking.time || booking.time === "CLOSED"}
                    className={`w-full h-20 rounded-[1.8rem] flex items-center justify-between px-8 transition-all ${!agreed || totalPrice === 0 || !booking.time || booking.time === "CLOSED" ? 'bg-[#D3C7BC] opacity-60' : 'bg-[#6B5A4D] text-white shadow-2xl'}`}>
                    <div className="text-left">
                        <p className="text-[9px] opacity-60 font-bold uppercase tracking-widest">Total Price</p>
                        <p className="text-2xl font-bold">NT$ {totalPrice.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#D4A5A5]">產生預約明細<LucideIcon name="chevron-right" /></div>
                </button>
            </div>
        </div>
    );
};

export default PriceTab;