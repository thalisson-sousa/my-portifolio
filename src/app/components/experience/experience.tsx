import Image from "next/image";
import SectionTitle from "../sectionTitle/sectionTitle";
import "./experience.scss";
import { Language } from "./languagens";

export default function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        5 years of experience in the IT area, currently working as a full network analyst, I have the goal of migrating my career to Dev
      </p>
      <div className="experience-time">

        <Language src="/reacthover.png" alt="React Logo" measure="measure-2" time="2 Month"/>
        <Language src="/javascript.png" alt="js Logo" measure="measure-4" time="4 Month"/>
        <Language src="/node.svg" alt="Node Logo" measure="measure-3" time="3 Month"/>
        <Language src="/javahover.png" alt="Java Logo" measure="measure-1" time="1 Month"/>
        <Language src="/sql.png" alt="Mysql Logo" measure="measure-1" time="1 Month"/>

      </div>
    </div>
  );
}
