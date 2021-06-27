import config from "Config";

const MyEmail = () => (
  <a href={`mailto:${config.values.email}`}>{config.values.email}</a>
);

export default MyEmail;
