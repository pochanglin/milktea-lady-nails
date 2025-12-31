import { useState } from 'react';
import LucideIcon from '../UI/LucideIcon.jsx';
import { generateBookingSummary, copyToClipboard } from '../../utils/clipboard.js';

const SummaryModal = ({ bookingState, onClose }) => {
    const [copied, setCopied] = useState(false);
    const { booking, selectedStyleObj, selectedRemovalObj, extensionCount, repairCount, addOnTotal, discounts, totalPrice } = bookingState;

    const handleCopy = async () => {
        const text = generateBookingSummary(booking, selectedStyleObj, selectedRemovalObj, extensionCount, repairCount, addOnTotal, discounts, totalPrice);
        const wasFallback = await copyToClipboard(text);
        if (wasFallback) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const summaryText = generateBookingSummary(booking, selectedStyleObj, selectedRemovalObj, extensionCount, repairCount, addOnTotal, discounts, totalPrice) +
        `回傳 LINE 完成預約\n` +
        `𝙼𝙸𝙻𝙺𝚃𝙴𝙰.𝙻𝙰𝙳𝚈_ 𝙽𝙰𝙸𝙻`;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 z-50">
            <div className="bg-[#F2EDE7] w-full max-w-xs rounded-[2.5rem] p-8 shadow-2xl text-center relative">
                <button onClick={onClose} className="absolute top-6 right-6 text-[#A66E6E]"><LucideIcon name="x" size={24} /></button>
                <LucideIcon name="sparkles" className="mx-auto mb-2 text-[#A66E6E]" size={32} />
                <div className="bg-white/60 p-5 rounded-3xl text-left text-[11px] mb-6 whitespace-pre-wrap leading-relaxed shadow-inner border border-[#D4A5A5]/10">
                    {summaryText}
                </div>
                <button onClick={handleCopy} className={`w-full py-4 rounded-full font-bold text-[11px] transition-all flex items-center justify-center gap-2 shadow-lg ${copied ? 'bg-green-700 text-white' : 'bg-[#A66E6E] text-white'}`}>
                    {copied ? <LucideIcon name="check" size={16} /> : <LucideIcon name="copy" size={16} />}
                    {copied ? "已複製明細" : "複製內容並傳送(回傳官方Line)"}
                </button>
            </div>
        </div>
    );
};

export default SummaryModal;