import PlayingCardType from './PlayingCardType';
import PlayerAction from './PlayerAction';
import PlayingCard from './PlayingCard';

/**
 * The Blackjack Brain that processes player actions and tracks scores.
 * @yields Singleton (shared)
 */
export default class BlackjackBrain {
    /**
     * A singleton instance.
     * @static
     */
    public static shared = new BlackjackBrain();

    private chartData: { [key: string]: { [key: string]: string } };

    private constructor() {
        this.chartData = require('../assets/charts/chart-1.json');
    }

    /**
     * Checks whether the player's action is the best move according the Basic Strategy Guide.
     * @param playerCards The player's current cards.
     * @param dealerCards The dealer's current cards.
     * @param action The player's action.
     */
    public checkAction = (
        playerCards: PlayingCard[],
        dealerCards: PlayingCard[],
        action: PlayerAction
    ): boolean => {
        // Fetches the dealer's up card
        const dealerUpCard = dealerCards.find((card) => card.getID() !== PlayingCardType.backOfCard.id);
        if (!dealerUpCard) throw Error('Invalid Dealer Up-Card!');

        // Fetches the symbol for all cards
        const dealerCardSymbol = this.getSymbolFromID(dealerUpCard.getID());
        const playerCardSymbols = playerCards.map((card) => this.getSymbolFromID(card.getID()));

        // Checks for specific player card pairs in the chart
        let expectedAction: string | undefined;
        expectedAction = this.chartData[dealerCardSymbol][playerCardSymbols.join(',')];
        if (expectedAction) return expectedAction === action.toString();

        // Check for player card values in the chart
        const playerCardValues = playerCardSymbols.map((symbol) => this.getValueFromSymbol(symbol));
        expectedAction = this.chartData[dealerCardSymbol][
            `${playerCardValues.reduce((prev, curr) => prev + curr)}`
        ];
        if (expectedAction) return expectedAction === action.toString();

        // Nothing matched
        return false;
    };

    /**
     * Checks if the given hand corresponds to a Blackjack.
     * @param cards The cards to verify.
     */
    public isBlackjack = (cards: PlayingCard[]): boolean => {
        if (cards.length < 2 || cards.length > 2) return false;
        const values = cards.map((card) => this.getValueFromSymbol(this.getSymbolFromID(card.getID())));
        const totalValue = values.reduce((prev, curr) => prev + curr);
        return totalValue === 21;
    };

    /**
     * Checks if the given hand can be split.
     * @param cards The cards to verify.
     */
    public canSplit = (cards: PlayingCard[]): boolean => {
        if (cards.length < 2 || cards.length > 2) return false;
        const values = cards.map((card) => this.getValueFromSymbol(this.getSymbolFromID(card.getID())));
        return values[0] === values[1];
    };

    /**
     * Processes the given ID by removing the suit symbol and turning face cards to a 10.
     * @param id The full ID of the playing card.
     */
    private getSymbolFromID = (id: string): string => {
        const firstChar = id[0];
        if (this.isLetter(firstChar)) {
            return firstChar !== 'A' ? '10' : firstChar;
        }
        return firstChar === '1' ? '10' : firstChar;
    };

    /**
     * Processes the given Symbol by converting it to its corresponding number value.
     * @param symbol The processed card symbol to extract the value from.
     */
    private getValueFromSymbol = (symbol: string): number => {
        if (this.isLetter(symbol)) {
            return symbol !== 'A' ? 10 : 11;
        }
        return parseInt(symbol, 10);
    };

    /**
     * Returns whether the given string consists of letters.
     * @param s The string to check.
     */
    private isLetter = (s: string): boolean => {
        return s.toLowerCase() !== s.toUpperCase();
    };
}
