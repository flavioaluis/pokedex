import { useAuth } from 'context/useAuth';


export const ProtectedLayout = ({children}: {children: JSX.Element}) => {

  const auth = useAuth();
 
  if(!auth.email) {
    // eslint-disable-next-line react/no-unescaped-entities
    return <h1>You don't have access</h1>;
  }
  return children;
};