import React from 'react'
import {Link} from "react-router-dom";

export const ChallengesList = () => {
  const challenges =[]

  return (
    <main>
      <section>
        <aside>
          <h2>Challenges</h2>
        </aside>
        <ul>
          {
            Object.keys(challenges).map(id => (
              <li>
                <Link to={`/challenge/${id}`}>{challenges[id].name}</Link>
              </li>
            ))
          }
        </ul>
        <Link to="/new-challenge">
          <b>Create New Challange</b>
        </Link>
      </section>
    </main>
  )
}