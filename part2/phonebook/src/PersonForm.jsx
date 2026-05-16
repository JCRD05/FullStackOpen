const PersonForm = ({personEventHandler, name, nameEventHandler, number, numberEventHandler}) => {
  return (
    <form onSubmit={personEventHandler}>
      <div>
        name: 
        <input 
        value={name}
        onChange={nameEventHandler} />
      </div>

      <div>
        number: 
        <input
        value={number}
        onChange={numberEventHandler} />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm