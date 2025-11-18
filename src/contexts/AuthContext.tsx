import { createContext, useState, ReactNode } from 'react';
import boy from "../assets/boy.png";
import gearl from "../assets/gearl.png";
interface FormState { 
  First_Name: string;
  Last_Name: string;
  Email: string;
  Password: string | number;
  Profile_Image?: File | null;
  gender: string | null;
}

interface User {
  First_Name?: string;
  Last_Name?: string;
  Email?: string;
  Password?: string | number;
  Profile_Image?: string | File | null;
  gender?: string | null;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  formData: FormState;
  setFormData: React.Dispatch<React.SetStateAction<FormState>>;
  FirstLetar: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormState>({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    Profile_Image: null,
    gender: null,
  });

  const Avatar = (user) => {
    if (user?.gender === "male") return boy;
    if (user?.gender === "female") return gearl;
    return null;
  };

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<User | null>({
    First_Name: "Amir",
    Last_Name: "mohammd",
    Email: "wwdwk@gmail.com",
    Password: "iuytredd",
    Profile_Image: null,
    gender: "male",
  }); 
  const FirstLetar: string = user?.First_Name?.[0] || "";

  return (
    <AuthContext.Provider value={{ 
      
      user,
      setUser,
      formData,
      setFormData, 
      FirstLetar,
      isLogin,
      setIsLogin,
      Avatar
       }}>
      {children}
    </AuthContext.Provider>
  );
}
