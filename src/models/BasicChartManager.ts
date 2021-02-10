import chart from 'assets/charts/chart-guide.json';
import chartMDC from 'assets/charts/chart-MDC.json';
import chartDDC from 'assets/charts/chart-DDC.json';
import chartSDC from 'assets/charts/chart-SDC.json';

/**
 * Manages the available Basic Strategy Charts.
 */
export default class BasicChartManager {
    /**
     * The Basic Strategy Chart Data Guide detailing all supported Strategy Charts.
     * @returns JSON
     */
    public static ChartGuide = chart;

    /**
     * Retrieves the Basic Strategy Chart data from the given chart ID.
     * @param chartID The ID of the chart.
     * @returns JSON
     */
    public static getChartFromID = (chartID: string): { [key: string]: { [key: string]: string } } => {
        switch (chartID) {
            case 'MDC':
                return chartMDC;
            case 'DDC':
                return chartDDC;
            case 'SDC':
                return chartSDC;
            default:
                console.log(`Could not find chart with ID ${chartID}! Using the default chart.`);
                return chartMDC;
        }
    };

    /**
     * Retrieves the Chart Details data from the given chart ID.
     * @param chartID The ID of the chart.
     * @returns JSON
     */
    public static getChartDetailsFromID = (chartID: string): { [key: string]: string } => {
        return Object(BasicChartManager.ChartGuide.charts)[chartID];
    };
}
