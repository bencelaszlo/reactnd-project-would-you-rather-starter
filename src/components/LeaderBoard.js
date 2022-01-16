import React from 'react';

import { useQuestions, useUsers } from '../hooks/store';
import LeaderBoardCard from './LeaderBoardCard';

function LeaderBoard () {
  const users = useUsers();
  const questions = useQuestions();

  const leaderboardUsers = users.map(user => {
    return {
      id: user.id,
      name: user.name,
      avatarUrl: user.avatarUrl,
      questions: questions.filter(q => q.userId === user.id).length,
      answers: questions.filter(q => q.answers.some(a => a.userId === user.id)).length
    };
  });

  const sortedLeaderboardUsers = leaderboardUsers.sort((a, b) => {
    if (a.questions > b.questions) {
      return -1;
    } else if (b.questions > a.questions) {
      return 1;
    } else {
      if (a.answers > b.answers) {
        return -1;
      } else if (b.answers > a.answers) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  const sortedLeaderboardUsersWithIndexes = sortedLeaderboardUsers.map((user, index) => {
    return {
      ...user,
      index: (index + 1)
    };
  });

  return (
    <div className="overflow-x-auto mt-4 p-2">
    <table className="table w-full">
      <thead>
        <tr>
          <th>Position</th> 
          <th>User</th> 
          <th>Questions</th> 
          <th>Answers</th>
        </tr>
      </thead> 
      <tbody>
       { !sortedLeaderboardUsersWithIndexes.length && <h2>There are no users yet.</h2> }
        {Array.isArray(sortedLeaderboardUsersWithIndexes) && sortedLeaderboardUsersWithIndexes.map(user => <LeaderBoardCard
          key={user.id}
          {...user}>
        </LeaderBoardCard>)}
      </tbody>
    </table>
  </div>
  );
}

export default LeaderBoard;