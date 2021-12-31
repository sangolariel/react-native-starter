import React from 'react';

/*Store state Redux Saga */
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import storeInit from './src/store';
const {store, persistor} = storeInit();

/*Bootstrap setup */
import Bootstrap from './src/bootstrap';

type Props = {};

const App: React.FC<Props> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Bootstrap />
      </PersistGate>
    </Provider>
  );
};

export default App;
