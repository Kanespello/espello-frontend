import { ConversationTurn } from "./ConversationTurn"

export interface ConversationTurnContextModel {
    conversationTurn :ConversationTurn;
    changeConversationTurn: (turn: ConversationTurn) => { }
}