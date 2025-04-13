import Header from './Header'
import Part from './Part'
import Total from './Total'

const Course = ({course}) => {

    const content = course.parts.map((part, index) =>
        (<Part key={part.id} name={part.name} exercises={part.exercises}/>)
    )

    return (
        <div>
            <Header courseName={course.name}/>
            {content}
            <Total parts={course.parts} />
        </div>
    )
    
}

export default Course