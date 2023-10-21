import "./Clock.scss";
import { useEffect } from "react";
import { setTime } from "../../redux/slices/clockSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Clock = () => {
	const time = useAppSelector((state) => state.clock.time);
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
