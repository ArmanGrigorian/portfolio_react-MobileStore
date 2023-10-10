const RemoveItem = () => {
	return (
		<form>
			<fieldset>
				<legend>REMOVE ITEM</legend>

				<input type={"text"} placeholder={"id..."} />
				<input type={"submit"} value={"REMOVE"} />
			</fieldset>
		</form>
	);
};

export default RemoveItem;
