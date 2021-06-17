import { useAppDispatch } from 'app/hooks';
import React, { useEffect } from 'react';
import { studentActions } from '../studentSlice';

export default function ListPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      studentActions.fetchStudentList({
        _page: 1,
        _limit: 15,
      })
    );
  }, [dispatch]);

  return <div>Student List Page</div>;
}
