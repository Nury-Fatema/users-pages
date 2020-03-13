import React from "react";
import "./Statistics.style.css";
import SelectEmploy from "../SelectEmploy/SelectEmploy";


const Statistics = ({ topEmployList }) => {
	return (
		<div className="statistics">
			
			<div className="detail">
				
				<div className="selected-pepoles">
				{topEmployList.length === 0 ? (
						<h1>You Are Invited To Be A Friend</h1>
					) : (
						topEmployList.map((selectPeople, i) => (
							<SelectEmploy key={i} info={selectPeople} />
						))
					)}
				</div>
				<div className="total">
					<p> {topEmployList.length} Person</p>
					
				</div>
			</div>
		</div>
	);
};

export default Statistics;
