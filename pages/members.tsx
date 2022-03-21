import Image from "next/image";
import useSWR from "swr";
import MainTitle from "../components/MainTitle";
import { ProfileCard } from "../components/ProfileCard";
import styles from "../styles/members.module.css"

const fetcher = (input: RequestInfo, init?: RequestInit) => fetch(input, init).then((res) => res.json());

export default function Members() {
  let { data, error } = useSWR("https://api.github.com/orgs/netunion/members", fetcher);

  return <>
    <MainTitle focus="members" />
    <div className={styles.membersGrid}>
      {data?.map((x: any) => <ProfileCard key={x.login} profile={x}/>)}
    </div>
    {/* <p style={{ textAlign: "center", fontSize: "0.5rem" }}>Forever remember those who contributed to NetUnion.</p> */}
  </>;
}
