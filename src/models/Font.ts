/**
 * Provides the available imported fonts.
 */
const Font = (font: keyof typeof FontsAvailable): string => font;

export default Font;

/**
 * All font imports for expo-font.
 */
export const FontsAvailable = {
    'Poppins-Regular': require('assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Medium': require('assets/fonts/Poppins/Poppins-Medium.ttf'),
    'Poppins-Bold': require('assets/fonts/Poppins/Poppins-Bold.ttf'),
    'Rubik-Regular': require('assets/fonts/Rubik/Rubik-Regular.ttf'),
    'Rubik-Medium': require('assets/fonts/Rubik/Rubik-Medium.ttf'),
    'Rubik-Bold': require('assets/fonts/Rubik/Rubik-Bold.ttf'),
};
