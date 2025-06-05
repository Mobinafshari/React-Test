import { useTestContext } from '@context/TestContext';
import store from '@store/index';

function SecondMain() {
  const { theme } = useTestContext();
  const libraryTheme = store.getState('theme');
  // const [count, setCount] = store.useStoreKey('count');
  return (
    <div style={{ marginTop: '50px' }}>
      <div>
        theme in library {libraryTheme}
        {/* <h2>Count: {count}</h2>
        <Button onClick={() => setCount(count + 1)}>
          Increment for library
        </Button>
        <Button onClick={() => setCount((c) => c + 1)}>
          Functional Update
        </Button> */}
      </div>
      theme is {theme}
    </div>
  );
}

export default SecondMain;
