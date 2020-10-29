import axios from "axios";
import {
	CHALLENGE_LIST_REQUEST,
	CHALLENGE_LIST_SUCCESS,
	CHALLENGE_LIST_FAIL,
	CHALLENGE_DETAILS_REQUEST,
	CHALLENGE_DETAILS_SUCCESS,
	CHALLENGE_DETAILS_FAIL,
	CHALLENGE_DELETE_REQUEST,
	CHALLENGE_DELETE_SUCCESS,
	CHALLENGE_DELETE_FAIL,
	CHALLENGE_CREATE_REQUEST,
	CHALLENGE_CREATE_SUCCESS,
	CHALLENGE_CREATE_FAIL,
	CHALLENGE_UPDATE_REQUEST,
	CHALLENGE_UPDATE_SUCCESS,
	CHALLENGE_UPDATE_FAIL,
} from "../constants/challengeConstants";

export const listChallenges = () => async (dispatch) => {
	try {
		dispatch({ type: CHALLENGE_LIST_REQUEST });

		const { data } = await axios.get("/api/challenges");

		dispatch({ type: CHALLENGE_LIST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: CHALLENGE_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const listChallengeDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: CHALLENGE_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/challenges/${id}`);

		dispatch({ type: CHALLENGE_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: CHALLENGE_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const deleteChallenge = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: CHALLENGE_DELETE_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "Application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		await axios.delete(`/api/challenges/${id}`, config);
		dispatch({
			type: CHALLENGE_DELETE_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: CHALLENGE_DELETE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const createChallenge = () => async (dispatch, getState) => {
	try {
		dispatch({ type: CHALLENGE_CREATE_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		const { data } = await axios.post(`/api/challenges`, {}, config);

		dispatch({
			type: CHALLENGE_CREATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CHALLENGE_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const updateChallenge = (challenge) => async (dispatch, getState) => {
	try {
		dispatch({ type: CHALLENGE_UPDATE_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-Type": "Application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		const { data } = await axios.put(
			`/api/challenges/${challenge._id}`,
			challenge,
			config
		);

		dispatch({
			type: CHALLENGE_UPDATE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CHALLENGE_UPDATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
