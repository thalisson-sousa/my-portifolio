import Image from "next/image";
import SectionTitle from "../sectionTitle/sectionTitle";
import "./experience.scss";

export default function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        5 years of experience in the IT area, currently working as a full network analyst, I have the goal of migrating my career to Dev
      </p>
      <div className="experience-time">
        <div className="experience-language">
          <Image
            src="/react.png"
            alt="React.js Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-2">
              <span>2 month</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image src="/js.png" alt="js Logo" width={40} height={40} priority />
          <div className="experience-unit">
            <div className="experience-measure measure-4">
              <span>4 month</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image src="/node.svg" alt="ts Logo" width={40} height={40} priority />
          <div className="experience-unit">
            <div className="experience-measure measure-3">
              <span>3 month</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            src="/java.png"
            alt="java Logo"
            width={40}
            height={40}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>1 month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
