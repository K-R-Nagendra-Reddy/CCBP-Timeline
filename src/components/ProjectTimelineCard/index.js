// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = details

  const onClickVisitButton = () => {
    const {history} = props
    history.replace({projectUrl})
  }

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="course-title-time">
        <h1 className="course-title">{projectTitle}</h1>
        <div className="clock-icon-time">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="visit-button">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
