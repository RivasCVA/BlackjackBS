/**
 * Color components for the BlackjackBS app (in HEX).
 */
const Color = {
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#D3D3D3',
    darkGray: '#3E3E3E',
    casinoGreen: '#009900',
    casinoRed: '#DC1C13',
    casinoOrange: '#ED872D',
    leafGreen: '#55AE3A',
    chartGreen: '#92D050',
    chartYellow: '#FFFF66',
    chartBlue: '#00B0F0',
    chartRed: '#EF2648',
    gradient: {
        mangoGradient: ['#FFE259', '#FFA751'],
        verBlackGradient: ['#F7F8F8', '#ACBB78'],
        midnightCityGradient: ['#232526', '#414345'],
        titaniumGradient: ['#859398', '#414345'],
        littleLeafGradient: ['#76b852', '#8DC26F'],
        kennedyGradient: ['#3BB78F', '#0BAB64'],
        newGradient: ['#ABBAAB', '#FFFFFF'],
        htmlGradient: ['#F16529', '#E44D26'],
        blueSkiesGradient: ['#2F80ED', '#56CCF2'],
    },
};

export default Color;

/**
 * Converts a Color attribute to RGB(A).
 * @param hex The hexadecimal string value.
 * @param alpha Optional alpha value [0, 1].
 */
export const HexToRGB = (hex: string, alpha?: number): string => {
    const h = '0123456789ABCDEF';
    const r = h.indexOf(hex[1]) * 16 + h.indexOf(hex[2]);
    const g = h.indexOf(hex[3]) * 16 + h.indexOf(hex[4]);
    const b = h.indexOf(hex[5]) * 16 + h.indexOf(hex[6]);
    if (typeof alpha !== 'undefined') return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Flips the given gradient colors to opposite ends.
 * @param gradient The hexadecimal array of color points.
 */
export const flipGradient = (gradient: string[]): string[] => {
    return gradient.reverse();
};
