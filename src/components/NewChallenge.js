import React, {useContext} from 'react'
import {Link, useHistory} from "react-router-dom";
import {ChallengesContext} from "./ChallengesContex";

export const NewChallenge = () => {
  const {createNewChallenge} = useContext(ChallengesContext)
  const history = useHistory()

  const onSubmit = (event) => {
    event.preventDefault()
    const name = event.target.challenge.value
    createNewChallenge(name)
    history.push("/")
  }

  return (
    <main>
      <section>
        <form onSubmit={onSubmit}>
          <p>
            <Link to="/">Back to challenges list</Link>
          </p>
          <label htmlFor="challenges">Challenge title:</label>
          <input type="text" name="challenge" required />
          <button>Create challenge</button>
        </form>
      </section>
    </main>
  )
}