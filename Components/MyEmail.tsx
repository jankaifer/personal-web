import values from "Configs/values";

const MyEmail = () => <a href={`mailto:${values.email}`}>{values.email}</a>;

export default MyEmail;
