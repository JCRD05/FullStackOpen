import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    
    if(persons.find(person => person.name === newName)){
      return alert(`${newName} is already added to phonebook`)
    }

    if(newNumber === '' || newName === ''){
      return alert(`please fill out all the form fields`)
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    axios
    .post('http://localhost:3001/persons', newPerson)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const filteredPersons = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
      filter={filter} 
      eventHandler={handleFilterChange}></Filter>

      <h3>add a new</h3>
      <PersonForm 
      personEventHandler={addPerson} 
      name={newName}
      nameEventHandler={handleNameChange}
      number={newNumber}
      numberEventHandler={handleNumberChange}></PersonForm>

      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons}></Persons>
    </div>
  )
}

export default App