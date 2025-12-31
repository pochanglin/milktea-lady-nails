import { useState, useMemo } from 'react';
import { PRICES } from '../data/prices.js';
import { getAvailableTimes, calculateAddOnTotal, calculateDiscountTotal, calculateTotalPrice } from '../utils/calculations.js';

export const useBooking = () => {
    const [style, setStyle] = useState(null);
    const [removal, setRemoval] = useState(null);
    const [extensionCount, setExtensionCount] = useState(0);
    const [repairCount, setRepairCount] = useState(0);
    const [addOns, setAddOns] = useState({ catEye: 0, mirror: 0, french: 0, handPaint: 0 });
    const [discounts, setDiscounts] = useState({ customerBirthday: false });
    const [booking, setBooking] = useState({ name: '', date: '', time: '' });

    const availableTimes = useMemo(() => getAvailableTimes(booking.date), [booking.date]);

    const selectedStyleObj = useMemo(() => PRICES.styles.find(s => s.id === style), [style]);
    const selectedRemovalObj = useMemo(() => PRICES.removal.find(r => r.id === removal), [removal]);
    const addOnTotal = useMemo(() => calculateAddOnTotal(addOns), [addOns]);
    const discountTotal = useMemo(() => calculateDiscountTotal(discounts), [discounts]);
    const totalPrice = useMemo(() => calculateTotalPrice(selectedStyleObj, selectedRemovalObj, extensionCount, repairCount, addOnTotal, discountTotal), [selectedStyleObj, selectedRemovalObj, extensionCount, repairCount, addOnTotal, discountTotal]);

    const updateBooking = (updates) => {
        setBooking(prev => ({ ...prev, ...updates }));
    };

    const updateAddOns = (key, value) => {
        setAddOns(prev => ({ ...prev, [key]: Math.max(0, Math.min(10, value)) }));
    };

    const updateDiscounts = (key, value) => {
        setDiscounts(prev => ({ ...prev, [key]: value }));
    };

    return {
        style,
        setStyle,
        removal,
        setRemoval,
        extensionCount,
        setExtensionCount,
        repairCount,
        setRepairCount,
        addOns,
        setAddOns,
        updateAddOns,
        discounts,
        setDiscounts,
        updateDiscounts,
        booking,
        setBooking,
        updateBooking,
        availableTimes,
        selectedStyleObj,
        selectedRemovalObj,
        addOnTotal,
        discountTotal,
        totalPrice
    };
};