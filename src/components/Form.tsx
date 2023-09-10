import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetBanksQuery } from "../redux/services/banksApi";

const Form = () => {
	const navigate = useNavigate();

	const [selectedBank, setSelectedBank] = useState<string>("");
	const [accountNumber, setAccountNumber] = useState<string>("");

	const { data: bankData, error, isLoading, isSuccess } = useGetBanksQuery();

	const banks = bankData?.data;

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log(accountNumber);
		console.log(selectedBank);

		navigate(`/profile/${accountNumber}/${selectedBank}`);
	};

	let bankList;

	if (isLoading) {
		bankList = <option value="loading">loading...</option>;
	} else if (isSuccess) {
		bankList = banks?.map((bank: any) => (
			<option value={bank.code} key={bank.id}>
				{bank.name}
			</option>
		));
	} else if (error) {
		console.log(error);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h1>Bank Enquiry App</h1>
			<label>Select a bank</label>
			<select
				value={selectedBank}
				onChange={(e) => setSelectedBank(e.target.value)}
				name="bankList"
				id="bankList"
			>
				<option value="no-value">Select your bank...</option>
				{bankList}
			</select>

			<label htmlFor="accountNumber">Enter Account Number</label>
			<input
				type="text"
				id="accountNumber"
				name="accountNumber"
				value={accountNumber}
				onChange={(e) => setAccountNumber(e.target.value)}
			/>

			<button type="submit">Submit</button>

			<p>
				Account name: <span id="customerName"></span>
			</p>
		</form>
	);
};

export default Form;
