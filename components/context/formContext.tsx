import { useState, createContext, useContext,ReactNode } from "react";

interface FormContextType {
 data:object;
 setFormValues:  (values: Object) => void
 done: boolean;
  setDone: (done: boolean) => void
}
export const FormContext = createContext<FormContextType>(null as any);

export default function FormProvider({ children }:{children:ReactNode}) {
  const [data, setData] = useState({});
  const [done, setDone] = useState(false);

  const setFormValues = (values:Object) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues,done ,setDone}}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);