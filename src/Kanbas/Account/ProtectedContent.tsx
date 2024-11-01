import { useSelector } from "react-redux";

export default function ProtectedContent({ children }: { children: any }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  if (currentUser && currentUser.role === "FACULTY") {
    return children; 
  } else {
    return null;
  }
}