import "./Clock.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectTime, setTime } from "../../redux/slices/clockSlice";

const Clock = () => {
	const time = useAppSelector(selectTime);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const timer = setInterval(() => {
			dispatch(setTime());
		}, 1000);

		() => {
			return clearInterval(timer);
		};
	}, [dispatch, time]);
	return <li className="Clock">{time}</li>;
};

export default Clock;
