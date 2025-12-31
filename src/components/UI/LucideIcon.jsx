import * as Icons from 'lucide-react';

const toPascalCase = (str) => {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
};

const LucideIcon = ({ name, size = 16, className = "" }) => {
    const IconComponent = Icons[toPascalCase(name)];
    if (!IconComponent) return null;
    return <IconComponent size={size} className={className} />;
};

export default LucideIcon;