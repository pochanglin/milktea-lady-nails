export const generateBookingSummary = (booking, selectedStyle, selectedRemoval, extensionCount, repairCount, addOnTotal, discounts, totalPrice) => {
    const addOnDisplay = addOnTotal > 0 ? `${addOnTotal}` : "0";

    return `𝙼𝙸𝙻𝙺𝚃𝙴𝙰.𝙻𝙰𝙳𝚈_ 𝙽𝙰𝙸𝙻 預約明細\n` +
        `━━━━━━━━━━━━━\n` +
        `👤 姓名：${booking.name || '未填'}\n` +
        `📅 日期：${booking.date || '未填'}\n` +
        `⏰ 時段：${booking.time || '未填'}\n` +
        `━━━━━━━━━━━━━\n` +
        (selectedStyle ? `🍂 款式：${selectedStyle.name} $${selectedStyle.price}\n` : "") +
        (selectedRemoval ? `🧼 卸甲：${selectedRemoval.name} $${selectedRemoval.price}\n` : "") +
        (extensionCount > 0 ? `💅 延甲：${extensionCount}指 $${extensionCount * 150}\n` : "") +
        (repairCount > 0 ? `🩹 補甲：${repairCount}指 $${repairCount * 100}\n` : "") +
        `✨ 加購：$${addOnDisplay}\n` +
        `🎂 壽星：${discounts.customerBirthday ? '是' : '否'}\n` +
        `━━━━━━━━━━━━━\n` +
        `✨ 預計總計：NT$ ${totalPrice}\n\n`;
};

export const copyToClipboard = async (text) => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'MILKTEA.LADY 預約明細',
                text: text
            });
        } catch (err) {
            console.log('取消分享或不支援', err);
        }
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        return true; // Indicate fallback copy was used
    }
    return false; // Indicate share was used
};