import {useRouter} from 'next/router'
import { useEffect,useState } from 'react';



interface queryParams {
  id: string;
  query: string;
}

const useQueryState = (query: queryParams) => {
  const router = useRouter();

  let pattern =
    router.query[query.id] ||
    router.asPath.match(new RegExp(`[&?]${query.id}=(.*)(&|$)`))?.[1]; 

  const [value, setValue] = useState(query.query);
  const pathname = router.pathname;
  const setState = (value: string) => {
    setValue(value);
    router.push(`${pathname}?${query.id}=${value}`, undefined, {
      shallow: true,
    });
  };
  useEffect(() => {
    if (typeof pattern==="string") {
      setValue(pattern.replace('%20', ' '));  
    }
  }, []);
  const returnValue: [typeof value, typeof setState]=[value, setState];
  return returnValue;
};
export default useQueryState
  