import { IHumanBasic } from './General.types';
import { ITeamBasic } from './Team.types';

export interface ITransfer {
	player: IHumanBasic;
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
