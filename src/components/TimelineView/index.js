// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  console.log(timelineItemsList[0])
  const renderTimeLines = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard details={item} key={item.id} />
    }
    return <ProjectTimelineCard details={item} key={item.id} />
  }

  return (
    <div className="bg-container">
      <h1 className="heading1">MY JOURNEY OF CCBP 4.0</h1>
      
      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{secondary: 'white'}}
      >
        {timelineItemsList.map(eachTimeLine => renderTimeLines(eachTimeLine))}
      </Chrono>
    </div>
  )
}

export default TimelineView
