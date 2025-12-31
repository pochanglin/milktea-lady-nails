export const PRICES = {
    styles: [
        { id: 'basic', name: '單色', price: 900 },
        { id: 'cat-eye-full', name: '貓眼 / 鏡面', price: 1100 },
        { id: 'random', name: '不挑款', price: 1200 },
        { id: 'design', name: '設計款', price: 1300 },
    ],
    removal: [
        { id: 'no-removal', name: '不卸甲', price: 0 },
        { id: 'store-redo', name: '本店卸甲續作', price: 200 },
        { id: 'other-redo', name: '他店卸甲續作', price: 300 },
        { id: 'only-removal', name: '純卸甲', price: 400 },
    ]
};

export const ADD_ONS_CONFIG = [
    { key: 'catEye', label: '貓眼', price: 30 },
    { key: 'mirror', label: '鏡面', price: 30 },
    { key: 'french', label: '法式', price: 50 },
    { key: 'handPaint', label: '手繪', price: 80 }
];

export const SERVICE_PRICES = {
    extension: 150,
    repair: 100
};

export const DISCOUNT_PRICES = {
    customerBirthday: 100
};