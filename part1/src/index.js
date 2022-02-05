import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}

const Content = (props) => {
  return (<>
    <Part part={props.part1.name} exercises={props.part1.exercises}/>
    <Part part={props.part2.name} exercises={props.part2.exercises}/>
    <Part part={props.part3.name} exercises={props.part3.exercises}/>
  </>)
}

const Total = (props) => {
  const numberOfExercises = props.part1.exercises + props.part2.exercises + props.part3.exercises;
  return <p>Number of exercises {numberOfExercises}</p>
}

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const props = {part1, part2, part3}

  return (
    <div>
      <Header course={course} />
      <Content {...props} />
      <Total {...props}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))