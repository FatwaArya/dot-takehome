import { Component, ErrorInfo, ReactNode } from 'react';
import { styled } from 'styled-components';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

const ErrorContainer = styled.div`
  padding: 2rem;
  background-color: #fff5f5;
  border: 1px solid #fc8181;
  border-radius: 8px;
  margin: 2rem auto;
  max-width: 800px;
`;

const ErrorTitle = styled.h2`
  color: #e53e3e;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  margin-bottom: 1rem;
`;

const ErrorDetails = styled.pre`
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 4px;
  overflow: auto;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const DefaultFallback = ({ error }: { error: Error | null }) => (
  <ErrorContainer>
    <ErrorTitle>Something went wrong!</ErrorTitle>
    <ErrorMessage>
      We apologize for the inconvenience. Please try refreshing the page or come back later.
    </ErrorMessage>
    {error && (
      <ErrorDetails>
        {error.message}
      </ErrorDetails>
    )}
  </ErrorContainer>
);

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service here
    console.error('Uncaught error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return <DefaultFallback error={this.state.error} />;
    }

    return this.props.children;
  }
} 