const Header = ({course}) => {
  return <h1>{course}</h1>
}

const Part = ({part, exercises}) => {
  return <p>{part} {exercises}</p>
}

const Content = ({parts}) => {
  return (
    <div>
      {
        parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises}></Part>)
      }
    </div>
  )
}

const Total = ({parts}) => {
  const sum = parts.reduce((sum, part) => sum += part.exercises, 0)
  return <b>Number of exercises {sum}</b>
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

export default Course