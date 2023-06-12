import SectionTitle from "../sectionTitle/sectionTitle"
import "./information.scss"

export default function Info() {
    return (
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>✈️ EN - Initial</span>
          <span>✈️ PT-BR - Native Speaker</span>
        </div>
        <div className="educational-info">
        <SectionTitle text="Education"/>
          <span>
            <ul>
              <li>👨‍🎓 Graduated in IT Management</li>
              <li>PostGraduate in Computer Networks</li>
            </ul>
          </span>
        </div>
      </div>
    )
}