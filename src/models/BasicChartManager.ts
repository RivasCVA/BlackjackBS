import chartMDC from 'assets/charts/chart-MDC.json';
import chartMDCDH from 'assets/charts/chart-MDC-DH.json';
import chartMDCNDAS from 'assets/charts/chart-MDC-NDAS.json';
import chartMDCDHNDAS from 'assets/charts/chart-MDC-DH-NDAS.json';

import chartDDC from 'assets/charts/chart-DDC.json';
import chartDDCDH from 'assets/charts/chart-DDC-DH.json';
import chartDDCNDAS from 'assets/charts/chart-DDC-NDAS.json';
import chartDDCDHNDAS from 'assets/charts/chart-DDC-DH-NDAS.json';

import chartSDC from 'assets/charts/chart-SDC.json';
import chartSDCDH from 'assets/charts/chart-SDC-DH.json';
import chartSDCNDAS from 'assets/charts/chart-SDC-NDAS.json';
import chartSDCDHNDAS from 'assets/charts/chart-SDC-DH-NDAS.json';

/**
 * Manages the available Basic Strategy Charts.
 * @static All Methods.
 */
export default class BasicChartManager {
    /**
     * The object holding basic information of the available Basic Strategy charts.
     */
    public static ChartInfo: { [key: string]: ChartInfoType } = {
        MDC: {
            title: 'Multi-Deck Basic Strategy Chart',
            decks: '4-8',
        },
        DDC: {
            title: 'Double Deck Basic Strategy Chart',
            decks: '2',
        },
        SDC: {
            title: 'Single Deck Basic Strategy Chart',
            decks: '1',
        },
    };

    /**
     * Retrieves the Basic Strategy Chart data from the given chart ID.
     * @param chartID The ID of the chart.
     * @returns JSON
     * @static
     */
    public static getChartFromID = (chartID: string): { [key: string]: { [key: string]: string } } => {
        switch (chartID) {
            case 'MDC':
                return chartMDC;
            case 'MDCDH':
                return chartMDCDH;
            case 'MDCNDAS':
                return chartMDCNDAS;
            case 'MDCDHNDAS':
                return chartMDCDHNDAS;
            case 'DDC':
                return chartDDC;
            case 'DDCDH':
                return chartDDCDH;
            case 'DDCNDAS':
                return chartDDCNDAS;
            case 'DDCDHNDAS':
                return chartDDCDHNDAS;
            case 'SDC':
                return chartSDC;
            case 'SDCDH':
                return chartSDCDH;
            case 'SDCNDAS':
                return chartSDCNDAS;
            case 'SDCDHNDAS':
                return chartSDCDHNDAS;
            default:
                console.log(`Could not find chart with ID ${chartID}! Using the default chart.`);
                return chartMDC;
        }
    };

    /**
     * Retrieves the Chart Details data from the given chart ID.
     * @param chartID The ID of the chart.
     * @returns JSON
     * @static
     */
    public static getChartInfoFromID = (chartID: string): ChartInfoType => {
        return BasicChartManager.ChartInfo[chartID.substring(0, 3)];
    };
}

/**
 * The literal type of the Chart Info object.
 */
export interface ChartInfoType {
    title: string;
    decks: string;
}
