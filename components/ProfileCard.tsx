import { ReactNode } from "react";
import styles from "../styles/ProfileCard.module.css";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (input: RequestInfo, init?: RequestInit) => fetch(input, init).then((res) => res.json());

export interface ProfileCardProps {
  profile: any;
  children?: ReactNode;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  let { data, error } = useSWR(profile.url, fetcher);

  let content;
  if (data) {
    content = <>
      <a href={`//github.com/${data.login}`}>
        <Image src={data.avatar_url} alt={`avatar of ${data.login}`} width={100} height={100} />
      </a>
      <div style={{ fontWeight: "700" }}><a className="override" href={`//github.com/${data.login}`}>{data.name}</a></div>
      <div style={{ fontSize: "0.8rem" }}><a className="override" href={`//github.com/${data.login}`}>{data?.bio}</a></div>
    </>;
  } else {
    content = "Loading"
  }

  return <div className={styles.profileCard}>
    {content}
  </div>;
}
