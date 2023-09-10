import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiResponse, BankDetailsApiResponse } from "../../model/models";

const apiKey: string = import.meta.env.VITE_API_SECRET_KEY;

export const banksApi = createApi({
	reducerPath: "banksApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.paystack.co/bank",
		prepareHeaders(headers) {
			headers.set("Authorization", `Bearer ${apiKey}`);
		},
	}),
	endpoints: (builder) => ({
		getBanks: builder.query<ApiResponse, void>({
			query: () => "/",
		}),
		verifyAccountNumber: builder.query<
			BankDetailsApiResponse,
			{
				accountNumber: string | undefined;
				selectedBank: string | undefined;
			}
		>({
			query: ({ accountNumber, selectedBank }) =>
				`/resolve?account_number=${accountNumber}&bank_code=${selectedBank}`,
		}),
	}),
});

export const { useGetBanksQuery, useVerifyAccountNumberQuery } = banksApi;
