import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={48}
              height={48}
              alt="NFT marketplace sample logo" 
            />
          </Link>

          <div className={styles.navMiddle}>
          <Link href="https://fmtlol.com" className={styles.link}>
              Home
            </Link>
            <Link href="/buy" className={styles.link}>
              Buy
            </Link>
            <Link href="/sell" className={styles.link}>
              Sell
            </Link>
            <Link href="https://stake.fmtlol.com/mint" className={styles.link}>
              Mint
            </Link>
            <Link href="https://stake.fmtlol.com/stake" className={styles.link}>
              Stake
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
          <ConnectWallet
          theme={"dark"}
          btnTitle={"Connect Wallet"}
          modalTitle={""}
          modalSize={"wide"}
          welcomeScreen={{
            title: "FMS Marketplace",
            subtitle: "Trade your NFTs, buy and sell, with 0 fees",
            img: {
              src: "https://i.imgur.com/3D2Arx0.png",
              width: 150,
              height: 150,
            },
          }}
          modalTitleIconUrl={
            "https://i.imgur.com/34MRBfl.png"
          }
        />
          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
