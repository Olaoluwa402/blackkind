import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Spinner from "../../components/Spinner/Spinner";
import { listUsers, deleteUser } from "../../actions/userActions";

const UserListPage = ({ history }) => {
	const dispatch = useDispatch();

	const userList = useSelector((state) => state.userList);
	const { loading, error, users } = userList;

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const userDelete = useSelector((state) => state.userDelete);
	const { success: successDelete } = userDelete;

	useEffect(() => {
		if (userInfo && userInfo.isAdmin) {
			dispatch(listUsers());
		} else {
			history.push("/login");
		}
	}, [dispatch, history, userInfo]);

	const deleteHandler = (id) => {
		if (window.confirm("Are you sure?")) {
			dispatch(deleteUser(id));
		}
	};

	// let flow = "overflow-x";
	return (
		<React.Fragment>
			<div className="container my-auto">
				<h1>Users</h1>
				{successDelete && (
					<Message message="defaultMessage">User Deleted</Message>
				)}
				{loading ? (
					<Spinner />
				) : error ? (
					<Message message="dangerMessage">{error}</Message>
				) : (
					<div className="badge-table-wrapper">
						<table>
							<thead>
								<tr>
									<th>NAME</th>
									<th>USERNAME</th>
									<th>EMAIL</th>
									<th>ADMIN</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{users &&
									users.map((user) => (
										<tr key={user._id}>
											<td>{user.fullName}</td>
											<td>{user.username}</td>
											<td>
												<a
													href={`mailto:${user.email}`}
												>
													{user.email}
												</a>
											</td>
											<td>
												{user.isAdmin ? (
													<FaCheck
														style={{
															color: "green",
														}}
													/>
												) : (
													<FaTimes
														style={{ color: "red" }}
													/>
												)}
											</td>
											<td>
												<Link
													to={`/admin/user/${user._id}/edit`}
												>
													<button className="btn-sm">
														<FaEdit />
													</button>
												</Link>
												<button
													className="btn-sm"
													onClick={() =>
														deleteHandler(user._id)
													}
												>
													<FaTrashAlt />
												</button>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default UserListPage;
