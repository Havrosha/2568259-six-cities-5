import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortingOptions } from '../../mock/sorting';
import { changeSortingType } from '../../store/action';
import { Dispatch, SetStateAction } from 'react';

type SortingItemProps = {
  setOpened: Dispatch<SetStateAction<boolean>>;
};
function SortingOptionsItem({ setOpened }: SortingItemProps): JSX.Element {
  const sortingType = useAppSelector((state) => state.sortingBy);
  const dispatch = useAppDispatch();
  return (
    <>
      {sortingOptions.map((option) => (
        <li
          className={`places__option ${
            option === sortingType ? 'places__option--active' : ''
          }`}
          tabIndex={0}
          onClick={() => {
            dispatch(changeSortingType(option));
            setOpened(false);
          }}
          key={option}
        >
          {option}
        </li>
      ))}
    </>
  );
}
export { SortingOptionsItem };
