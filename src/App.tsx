import { Theme } from '@radix-ui/themes';
import { ErrorBoundary } from './components/ErrorBoundary';
import '@radix-ui/themes/styles.css';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <Theme>
        <div className="app-container">
          {/* The router is configured in main.tsx */}
        </div>
      </Theme>
    </ErrorBoundary>
  );
}

export default App;
