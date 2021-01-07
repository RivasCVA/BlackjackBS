/**
 * Color components for the BlackjackBS app (in HEX).
 */
const Color = {
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#555555',
    casinoGreen: '#009900',
    casinoRed: '#DC1C13',
    mangoGradient: ['#FFE259', '#FFA751'],
    verBlackGradient: ['#F7F8F8', '#ACBB78'],
    midnightCityGradient: ['#232526', '#414345'],
    titaniumGradient: ['#414345', '#859398'],
    littleLeafGradient: ['#76b852', '#8DC26F'],
    kennedyGradient: ['#3BB78F', '#0BAB64'],
    newGradient: ['#ABBAAB', '#FFFFFF'],
};

export default Color;

/**
 * Converts a Color attribute to RGB(A).
 * @param hex The hexadecimal string value.
 * @param alpha Optional alpha value.
 */
export const ColorToRGB = (hex: string, alpha?: number): string => hexToRGB(hex, alpha);

const hexToRGB = (hex: string, alpha?: number): string => {
    const h = '0123456789ABCDEF';
    const r = h.indexOf(hex[1]) * 16 + h.indexOf(hex[2]);
    const g = h.indexOf(hex[3]) * 16 + h.indexOf(hex[4]);
    const b = h.indexOf(hex[5]) * 16 + h.indexOf(hex[6]);
    if (typeof alpha !== 'undefined') return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    return `rgb(${r}, ${g}, ${b})`;
};
