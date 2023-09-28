import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector, RootState } from '@app/store';
import useUsers from '@hooks/useUsers';
import { UserFetched } from '@interfaces/User';
import { getUsers } from '@redux/thunks/userThunk';

export default function TabPage() {
  const { searchTerm } = useUsers();
  const [usersData, setUsersData] = useState<UserFetched[]>([]);

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state: RootState) => state.userReducer,
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setUsersData(
        (data as UserFetched[]).filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    }
  }, [data, searchTerm]);
  return (
    <div>
      <div>
        <p>hola</p>
      </div>
    </div>
  );
}
