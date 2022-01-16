import React, { useCallback } from 'react';

import { useCurrentUser, useQuestions, useQuestionFilter } from '../hooks/store';
import { setQuestionFilter } from '../store/actions';
import QuestionCard from './QuestionCard';

function QuestionList (filter) {
  const questions = useQuestions();
  const currentUserId = useCurrentUser();
  const questionFilter = useQuestionFilter();

  const filteredQuestions = useCallback(() => {
    console.log('filteredQuestions called')
    switch (questionFilter) {
      case 'all':
        return questions;
      case 'answered':
        return questions.filter(question => question.answers.some(answer => answer.userId === currentUserId));
      case 'unanswered':
        return questions.filter(question => question.answers.every(answer => answer.userId !== currentUserId));
      default:
        return questions;
    }
  }, [currentUserId, questionFilter, questions]);

  console.log('questionFilter', questionFilter);
  console.log('filteredQuestions', filteredQuestions);

  const hasQuestion =  Array.isArray(filteredQuestions()) && filteredQuestions().length;

  const handleFilter = (event) => setQuestionFilter({ filter: event.target.value });
  
  return (
    <div className="mt-4 p-2">
        { !hasQuestion && <h2>There are no questions yet.</h2> }
        { hasQuestion && <div className="btn-group">
          <button className="btn btn-outline btn-lg" value="all" onClick={handleFilter}>All</button>
          <button className="btn btn-outline btn-lg" value="answered" onClick={handleFilter}>Answered</button>
          <button className="btn btn-outline btn-lg" value="unanswered" onClick={handleFilter}>Unanswered</button>
        </div>}
        {Array.isArray(filteredQuestions()) && filteredQuestions().map(question => <QuestionCard
                key={question.id}
                {...question}
            >
        </QuestionCard>)}
    </div>
  );
}

export default QuestionList;