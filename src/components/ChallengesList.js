import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {ChallengesContext} from "./ChallengesContex";

export const ChallengesList = () => {
  const {challenges} = useContext(ChallengesContext)

  return (
    <main>
      <section>
        <aside>
          <h2>Challenges</h2>

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
        </aside>
      </section>
    </main>
  )
}