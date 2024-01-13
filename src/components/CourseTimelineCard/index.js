// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  const {
    id,
    categoryId,
    title,
    description,
    courseTitle,
    duration,
    tagsList,
  } = details
  return (
    <div className="course-container">
      <div className="course-title-time">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="clock-icon-time">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-container">
        {tagsList.map(each => (
          <p id={each.id}>{each.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
