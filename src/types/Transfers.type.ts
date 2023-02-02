import { IHumanBasic } from './General.types';
import { ITeamBasic } from './Team.types';

export interface ITransferModified extends ITransfer {
	transfers: ITransferDetailsModified[];
}

export interface ITransfer {
	player: IHumanBasic;
	update: Date;
	transfers: ITransferDetails[];
}

export interface ITransferDetailsModified extends ITransferDetails {
	player: IHumanBasic;
}
export interface ITransferDetails {
	date: Date;
	type: string;
	teams: TransferTeamsType;
}

type TransferType = 'in' | 'out';

type TransferTeamsType = Record<TransferType, ITeamBasic>;
