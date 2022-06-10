import { useState, createContext, useContext, ReactNode } from "react";
import { AccountInputs } from "../inc/forms/Account";
import { PersonalInputs } from "../inc/forms/Personal";
import { SocialInputs } from "../inc/forms/Social";
interface FormContextType {
  data: Partial<dataExpected>;
  setFormValues: (values: Object) => void;
  done: boolean;
  setDone: (done: boolean) => void;
}
interface dataExpected extends SocialInputs, PersonalInputs, AccountInputs {}
export const FormContext = createContext<FormContextType>(null as any);

export default function FormProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Partial<dataExpected>>({});
  const [done, setDone] = useState(false);

  const setFormValues = (values: Object) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues, done, setDone }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
