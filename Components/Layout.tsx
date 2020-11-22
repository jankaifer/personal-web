import Head from "next/head";
import Link from "next/link";

import profile from "Assets/images/profile.jpg";
import utilStyles from "Styles/utils.module.scss";

import styles from "./layout.module.scss";

type Props = {
  children: React.ReactNode;
  home?: boolean;
};

const Layout = ({ children, home = false }: Props) => {
  const name = "Jan Kaifer";

  return (
    <div className={styles.container}>
      <Head>
        <title>Next blog</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src={profile}
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src={profile}
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
