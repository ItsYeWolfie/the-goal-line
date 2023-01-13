import { IPlayerBasic } from './Player.types';
import { ITeamBasic } from './Team.types';

export interface ITransfer {
	player: IPlayerBasic;
	update: Date;
	transfers: ITransferDetails[];
}

export interface ITransferDetails {
	date: Date;
	type: string;
	teams: TransferTeamsType;
}

type TransferType = 'in' | 'out';

type TransferTeamsType = Record<TransferType, ITeamBasic>;
