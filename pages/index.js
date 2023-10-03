import Head from "next/head"

import Header from "@/components/Header"

export default function HomePage() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      
    </div>
  );
}