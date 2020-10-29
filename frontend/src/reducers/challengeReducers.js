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
	CHALLENGE_CREATE_RESET,
	CHALLENGE_UPDATE_REQUEST,
	CHALLENGE_UPDATE_SUCCESS,
	CHALLENGE_UPDATE_FAIL,
	CHALLENGE_UPDATE_RESET,
} from "../constants/challengeConstants";

export const challengeListReducer = (state = { challenges: [] }, action) => {
	switch (action.type) {
		case CHALLENGE_LIST_REQUEST:
			return { loading: true, challenges: [] };
		case CHALLENGE_LIST_SUCCESS:
			return { loading: false, challenges: action.payload };
		case CHALLENGE_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const challengeDetailsReducer = (state = { challenge: {} }, action) => {
	switch (action.type) {
		case CHALLENGE_DETAILS_REQUEST:
			return { loading: true, ...state };
		case CHALLENGE_DETAILS_SUCCESS:
			return { loading: false, challenge: action.payload };
		case CHALLENGE_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const challengeDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case CHALLENGE_DELETE_REQUEST:
			return { loading: true };
		case CHALLENGE_DELETE_SUCCESS:
			return { loading: false, success: true };
		case CHALLENGE_DELETE_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const challengeCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case CHALLENGE_CREATE_REQUEST:
			return { loading: true };
		case CHALLENGE_CREATE_SUCCESS:
			return { loading: false, success: true, challenge: action.payload };
		case CHALLENGE_CREATE_FAIL:
			return { loading: false, error: action.payload };
		case CHALLENGE_CREATE_RESET:
			return {};
		default:
			return state;
	}
};

export const challengeUpdateReducer = (state = { product: {} }, action) => {
	switch (action.type) {
		case CHALLENGE_UPDATE_REQUEST:
			return { loading: true };
		case CHALLENGE_UPDATE_SUCCESS:
			return { loading: false, success: true, challenge: action.payload };
		case CHALLENGE_UPDATE_FAIL:
			return { loading: false, error: action.payload };
		case CHALLENGE_UPDATE_RESET:
			return { challenge: {} };
		default:
			return state;
	}
};
