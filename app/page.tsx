"use client";

import { useRouter } from "next/navigation";
import HomePage from "./component/HomePage";


export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Pass router down to HomePage so it can navigate */}
      <HomePage router={router} />
    </div>
  );
}
