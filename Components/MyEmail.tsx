import config from "Config";
import Link from "next/link";

const MyEmail = () => (
  <Link href={`mailto:${config.values.email}`}>{config.values.email}</Link>
);

export default MyEmail;
