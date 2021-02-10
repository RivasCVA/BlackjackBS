import React, { useCallback, useState } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import PlayerAction from 'models/PlayerAction';
import BasicChartManager from 'models/BasicChartManager';
import Font from 'models/Font';
import Color from 'models/Color';

/**
 * A zoomable chart displaying the active chart guide.
 */
const BasicStrategyChart = (props: Props): JSX.Element => {
    const { style, chartID, highlightHand } = props;
    const [chart] = useState<{ [key: string]: { [key: string]: string } }>(
        BasicChartManager.getChartFromID(chartID)
    );
    const dealerValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A'];
    const playerValues = [
        '21',
        '20',
        '19',
        '18',
        '17',
        '16',
        '15',
        '14',
        '13',
        '12',
        '11',
        '10',
        '9',
        '8',
        '7',
        '6',
        '5',
        'A,A',
        'A,10',
        'A,9',
        'A,8',
        'A,7',
        'A,6',
        'A,5',
        'A,4',
        'A,3',
        'A,2',
        '10,10',
        '9,9',
        '8,8',
        '7,7',
        '6,6',
        '5,5',
        '4,4',
        '3,3',
        '2,2',
    ];

    // Rotates given array to the right
    const rotate90Degrees = (array: string[][]) => {
        const result: string[][] = [];
        array.forEach((a, i, aa) => {
            a.forEach((b, j) => {
                result[j] = result[j] || [];
                result[j][aa.length - i - 1] = b;
            });
        });
        return result;
    };

    const getData = useCallback((): string[][] => {
        const data: string[][] = [];
        dealerValues.forEach((dealerValue) => {
            if (dealerValue in chart) {
                const chartColumn = chart[dealerValue];
                const columnData: string[] = [];
                playerValues.forEach((playerValue) => {
                    if (playerValue in chartColumn) {
                        columnData.push(chartColumn[playerValue]);
                    } else {
                        console.log(`Could Not Find ${playerValue} Within ${dealerValue} in Chart JSON!`);
                    }
                });
                data.push(columnData);
            } else {
                console.log(`Could Not Find ${dealerValue} in Chart JSON!`);
            }
        });
        return rotate90Degrees(data.reverse());
    }, [chart, dealerValues, playerValues]);

    // Gets cell color based on Player Action
    const getCellColor = (action: string) => {
        switch (action) {
            case PlayerAction.Stand:
                return Color.chartGreen;
            case PlayerAction.Hit:
                return Color.chartYellow;
            case PlayerAction.DoubleDown:
                return Color.chartRed;
            case PlayerAction.Split:
                return Color.chartBlue;
            default:
                return Color.white;
        }
    };

    // Creates and returns the chart data item cells
    const getItemCells = () =>
        playerValues.map((playerValue, i) => {
            return (
                <TableWrapper style={styles.tableWrapperRow} key={playerValue + i.toString(10)}>
                    <Cell
                        style={styles.playerValuesCell}
                        textStyle={styles.playerValuesText}
                        data={`${playerValue}`}
                    />
                    {dealerValues.map((dealerValue, j) => {
                        const action = getData()[i][j];
                        const getBackgroundColor = () => {
                            const currentHand = [dealerValue, playerValue];
                            const isDesiredCell =
                                JSON.stringify(currentHand) === JSON.stringify(highlightHand);
                            if (highlightHand != null && isDesiredCell) {
                                return { backgroundColor: Color.casinoOrange };
                            }
                            return { backgroundColor: getCellColor(action) };
                        };
                        return (
                            <Cell
                                style={StyleSheet.flatten([styles.item, getBackgroundColor()])}
                                textStyle={styles.itemText}
                                data={action}
                                key={dealerValue + j.toString(10)}
                            />
                        );
                    })}
                </TableWrapper>
            );
        });

    return (
        <View style={StyleSheet.flatten([styles.container, style])}>
            <Table borderStyle={styles.tableBorder}>
                <TableWrapper style={styles.tableWrapperRow}>
                    <Cell style={styles.corner} />
                    <Row
                        style={styles.dealerValuesCell}
                        textStyle={styles.dealerValuesText}
                        data={dealerValues}
                    />
                </TableWrapper>
                <TableWrapper style={styles.tableWrapperColumn}>{getItemCells()}</TableWrapper>
            </Table>
        </View>
    );
};

export default BasicStrategyChart;

interface Props {
    /** Table container styling. */
    style?: StyleProp<ViewStyle>;
    /** The id of the chart to display. */
    chartID: string;
    /** Highlights the given hand. String array as [dealer-hand, player-hand] - e.g. ['10', 'A,5'] */
    highlightHand?: string[];
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    tableBorder: {
        borderWidth: 1,
    },
    tableWrapperRow: {
        flexDirection: 'row',
    },
    tableWrapperColumn: {
        flexDirection: 'column',
    },
    corner: {
        width: 50,
        height: 28,
    },
    dealerValuesCell: {
        height: 28,
        flex: 1,
    },
    dealerValuesText: {
        textAlign: 'center',
        fontFamily: Font('Poppins-Bold'),
    },
    playerValuesCell: {
        width: 50,
        height: 28,
    },
    playerValuesText: {
        textAlign: 'center',
        fontFamily: Font('Poppins-Bold'),
    },
    item: {
        flex: 1,
    },
    itemText: {
        textAlign: 'center',
        fontFamily: Font('Poppins-Medium'),
    },
});
