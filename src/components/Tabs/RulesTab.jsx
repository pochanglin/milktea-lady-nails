import LucideIcon from '../UI/LucideIcon.jsx';

const RulesTab = ({ onSwitchToPrice }) => {
    return (
        <div className="p-8 space-y-8 animate-in fade-in duration-500">
            <section className="space-y-4">
                <h2 className="text-[14px] font-bold text-[#8E735B] flex items-center gap-2 border-b border-[#D4A5A5]/30 pb-2 italic">
                    <LucideIcon name="check-square" /> 預約流程
                </h2>
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-[#6B5A4D]">
                    <div className="space-y-1"><div className="bg-white/60 p-2 rounded-lg italic">1.閱讀</div><span>看完須知</span></div>
                    <div className="space-y-1"><div className="bg-white/60 p-2 rounded-lg italic">2.計價</div><span>估算總額</span></div>
                    <div className="space-y-1"><div className="bg-white/60 p-2 rounded-lg italic">3.加賴</div><span>回傳明細</span></div>
                    <div className="space-y-1"><div className="bg-white/60 p-2 rounded-lg italic">4.付訂</div><span>預約成功</span></div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-[14px] font-bold text-[#8E735B] flex items-center gap-2 border-b border-[#D4A5A5]/30 pb-2">
                    <LucideIcon name="info" /> 訂金政策 Policy
                </h2>
                <div className="bg-white/50 p-5 rounded-2xl text-[13px] leading-relaxed space-y-3">
                    <p className="font-bold text-[#A66E6E]">新客預約需先付訂金唷 💅 <br />訂金當天可全額折抵</p>
                    <div className="w-full h-[1px] bg-[#D4A5A5]/20"></div>
                    <ul className="space-y-2 text-[#6B5A4D]">
                        <li>• 3 天前取消可保留一次</li>
                        <li className="font-bold">• 2 天內取消或未到訂金不退</li>
                        <li>• 若是闆娘這邊的問題，訂金會無條件全額退還 🤍</li>
                    </ul>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-[14px] font-bold text-[#8E735B] flex items-center gap-2 border-b border-[#D4A5A5]/30 pb-2">
                    <LucideIcon name="alert-circle" /> 特殊情況處理
                </h2>
                <div className="space-y-4">
                    <div className="bg-[#EAE2D9]/60 p-4 rounded-xl">
                        <p className="text-[11px] font-bold text-[#A66E6E] mb-2">▫️ 可協助彈性處理（需第一時間告知）</p>
                        <p className="text-[12px] text-[#6B5A4D] leading-relaxed italic">身體突發不適、家庭緊急狀況、天氣或交通突發狀況（如颱風、重大事故）。</p>
                        <p className="mt-2 text-[11px] font-black text-[#8E735B]">➡️ 可保留訂金一次，可改期退費</p>
                    </div>
                    <div className="bg-white/30 p-4 rounded-xl border border-red-200/50">
                        <p className="text-[11px] font-bold text-red-700/60 mb-2">▫️ 無法視為特殊情況</p>
                        <p className="text-[12px] text-[#6B5A4D] leading-relaxed">忘記時間、臨時有其他行程、睡過頭、當日才告知無法前來、未到（No-show）。</p>
                        <p className="mt-2 text-[11px] font-black text-red-700/60">➡️ 訂金恕不退還</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-[14px] font-bold text-[#8E735B] flex items-center gap-2 border-b border-[#D4A5A5]/30 pb-2">
                    <LucideIcon name="help-circle" /> 常見問題 FAQ
                </h2>
                <div className="space-y-2">
                    <details className="group bg-white/40 rounded-xl overflow-hidden border border-white/40">
                        <summary className="p-4 text-[13px] font-bold cursor-pointer flex justify-between items-center select-none">
                            1. 為什麼需預先支付訂金？
                            <LucideIcon name="chevron-down" size={14} className="group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="px-4 pb-4 text-[12px] leading-relaxed text-[#6B5A4D]">
                            因為美甲是「一對一保留時段」的服務，一旦預約完成就會為你保留那段時間 💅 為了避免臨時取消造成空檔，會先收取訂金。當天會全額折抵，請放心唷 🤍
                        </div>
                    </details>
                    <div className="p-4 text-center">
                        <p className="text-[12px] text-[#8E735B] font-bold italic">第一次來有任何問題都可以問我</p>
                        <p className="text-[11px] mt-1 opacity-60 uppercase tracking-widest">Pay via: Cash / Transfer</p>
                    </div>
                </div>
            </section>

            <button onClick={onSwitchToPrice} className="w-full py-4 bg-[#8E735B] text-white rounded-full font-bold tracking-[0.2em] text-[12px] shadow-lg">前往預約計價</button>
        </div>
    );
};

export default RulesTab;