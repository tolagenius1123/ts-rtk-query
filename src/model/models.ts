export interface Bank {
	id: number;
	name: string;
	slug: string;
	code: string;
	longcode: string | null;
	gateway: string | null;
	pay_with_bank: boolean;
	active: boolean;
	country: string;
	currency: string;
	type: string;
	is_deleted: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface ApiResponse {
	status: boolean;
	message: string;
	data: Bank[];
}

export interface BankDetails {
	account_number: string;
	account_name: string;
	bank_id: number;
}

export interface BankDetailsApiResponse {
	status: boolean;
	message: string;
	data: BankDetails;
}
