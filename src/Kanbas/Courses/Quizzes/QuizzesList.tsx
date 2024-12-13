
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function QuizzesList() {
  const { cid } = useParams();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div>
      {/* ...existing code... */}
      {quizzes.map((quiz: any) => (
        <div key={quiz._id}>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`} className="text-black text-decoration-none">
            <strong>{quiz.name}</strong>
          </Link>
          {/* ...existing code... */}
        </div>
      ))}
    </div>
  );
}