export const toPascalCase = (str) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

export const getAvailableTimes = (date) => {
    if (!date) return [];
    const day = new Date(date).getDay();
    if (day >= 1 && day <= 4) return ["19:00"];
    if (day === 6) return ["13:00", "17:00", "21:00"];
    if (day === 0) return ["13:00", "17:00"];
    if (day === 5) return ["CLOSED"];
    return [];
};

export const calculateAddOnTotal = (addOns) => {
    return (addOns.catEye * 30) + (addOns.mirror * 30) + (addOns.french * 50) + (addOns.handPaint * 80);
};

export const calculateDiscountTotal = (discounts) => {
    return (discounts.customerBirthday ? 100 : 0);
};

export const calculateTotalPrice = (selectedStyle, selectedRemoval, extensionCount, repairCount, addOnTotal, discountTotal) => {
    const stylePrice = selectedStyle?.price || 0;
    const removalPrice = selectedRemoval?.price || 0;
    const extensionPrice = extensionCount * 150;
    const repairPrice = repairCount * 100;
    return Math.max(0, stylePrice + removalPrice + extensionPrice + repairPrice + addOnTotal - discountTotal);
};