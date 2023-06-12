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
          src="/perfil.png"
          alt="Next.js Logo"
          width={325}
          height={300}
          priority
        />
      </div>
    )
}
