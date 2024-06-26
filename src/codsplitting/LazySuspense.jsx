import { useState, Suspense } from 'react';

const SplitMe = React.lazy(() => import('./SplitMe'));

const LazySuspense = () => {

  const [visible, setVisible] = useState(false);

  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={onClick}>Hello React!</p>

        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>

      </header>
    </div>
  );
};

export default LazySuspense;
