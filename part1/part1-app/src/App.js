const Header = (props) => {
    return(
        <h1>{props.course}</h1>
    )
}
const Part = (props) => {
    return(
        <>
            <p><strong>{props.part.name}</strong></p>
            <p>Exercises: {props.part.exercises}</p>
            <br />
        </>
    )
}
const Content = (props) => {
    return(
        <>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </>
    )
}
const Total = (props) => {
    return(
        <p><strong>Total: {props.parts[0].exercises +
                           props.parts[1].exercises +
                           props.parts[2].exercises} </strong></p>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
}

export default App