import classNames from "classnames";
import Link from "next/link";
import styles from "../styles/MainTitle.module.css";

export interface MainTitleProps {
  focus?: "members" | "recruit";
}

export default function MainTitle({ focus }: MainTitleProps) {
  console.log(focus);
  return <div className={styles.mainTitle}>
    <div><Link href="/"><a className="override">NetUnion @ UESTC</a></Link></div>
    <div className="spacer" />
    <div className={styles.navs}>
      <div className={styles.nav}><Link href="/members"><a className={classNames(focus == "members" ? styles.focused : null, "override")}>Members</a></Link></div>
      <div className={styles.nav}><Link href="/recruit"><a className={classNames(focus == "recruit" ? styles.focused : null, "override")}>Recruit</a></Link></div>
      <div className={styles.nav}><a className="override" href="//github.com/netunion">GitHub</a></div>
    </div>
  </div>;
}
