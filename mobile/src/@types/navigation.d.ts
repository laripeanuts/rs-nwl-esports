import { GameCardType } from "./GameCardType";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameCardType;
    }
  };
};
