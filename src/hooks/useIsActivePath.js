import { useLocation } from 'react-router-dom';

export const useIsActivePath = (pathName) => {
  const activePathName = useLocation();
  return pathName === activePathName;
}
