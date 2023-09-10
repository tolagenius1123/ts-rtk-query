import { useParams, useNavigate } from "react-router-dom";
import { useVerifyAccountNumberQuery } from "../redux/services/banksApi";

const UserProfile = () => {
	const navigate = useNavigate();
	const { accountNumber, selectedBank } = useParams();

	const {
		data: accountData,
		error: error,
		isLoading,
		isSuccess,
	} = useVerifyAccountNumberQuery({
		accountNumber,
		selectedBank,
	});

	interface ErrorData {
		message: string;
		status: boolean;
	}

	interface BankDetailsError {
		status: number;
		data: ErrorData;
	}

	let status;
	if (isLoading) {
		status = <p>Loading...</p>;
	} else if (isSuccess) {
		status = <p>{isSuccess}</p>;
	} else if (error) {
		const fetchError = error as BankDetailsError;
		const extractedError = fetchError?.data.message;
		alert(extractedError);
	}

	const accountDetails = accountData?.data;

	return (
		<div className="profile">
			<div>{status}</div>
			<h2>Profile Details</h2>
			<p>
				Account Name: <span>{accountDetails?.account_name}</span>
			</p>
			<p>
				Account Number: <span>{accountDetails?.account_number}</span>
			</p>
			<button onClick={() => navigate("/")}>Back Home</button>
		</div>
	);
};

export default UserProfile;
