import { changeFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import styled from '@emotion/styled';

export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  width: 240px;
  height: ${({ theme }) => theme.spacing(14)};

  border-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  background-color: transparent;

  padding: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(10)};
  outline: none;

  transition: ${({ theme }) => theme.animation.cubicBezier};

  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 300;
  letter-spacing: 0.03em;

  &::placeholder {
    font-weight: 200;
  }
`;

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handelChangeFilter = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return <Input type="text" value={filter} onChange={handelChangeFilter} />;
};
