import React from "react";
import "./profile.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ people, addEventHandler }) => {
	const { name, imageUrl, salary, email, phone } = people;
	return (
		<div className="profile">
			<div className="avatar">
				<img src={imageUrl} alt="" />
			</div>
			<div className="info">
				<h3>{name}</h3>
				<ul>
					<li>
						<p> </p>
						<span>{email}</span>
					</li>
					<li>
						<p>Phone: </p>
						<span>{phone}</span>
					</li>
					<li>
						<p>Salary:</p>
						<span>${salary}</span>
					</li>
				</ul>
				<button className="addbtn" onClick={() => addEventHandler(people)}>
					<FontAwesomeIcon icon={faPlus} />
					Add Friend
				</button>
			</div>
		</div>
	);
};

export default Profile;
