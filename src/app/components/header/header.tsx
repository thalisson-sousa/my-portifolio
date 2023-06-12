import Image from "next/image";

import "./header.scss"

export default function header() {
    return (
        <div className="header">
        <div>
          <h1>Hi, i´m Thalisson 👋</h1>
          <h2>FrontEnd Developer</h2>
        </div>
        <Image
          src="/me.jpeg"
          alt="Next.js Logo"
          width={315}
          height={330}
          priority
        />
      </div>
    )
}
