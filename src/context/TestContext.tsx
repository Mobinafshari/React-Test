import { createContext, ReactNode, useContext, useState } from 'react';

type TestContextType = {
  num: number;
  setNumber: (number: number) => void;
  theme: 'dark' | 'light';
};
const TestContext = createContext<TestContextType | null>(null);

const TestProvider = ({ children }: { children: ReactNode }) => {
  const [num, setNum] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const setNumber = (number: number) => {
    setNum(number);
  };
  return (
    <TestContext.Provider value={{ num, setNumber, theme }}>
      {children}
    </TestContext.Provider>
  );
};

const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTestContext must be used within a TestProvider');
  }
  return context;
};
export { TestProvider, useTestContext };
