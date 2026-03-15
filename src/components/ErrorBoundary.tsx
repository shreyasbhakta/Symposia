import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Catches React render errors (e.g. from reCAPTCHA or other scripts on the WordPress page)
 * so the app doesn't show a blank white screen.
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Symposia app error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      const isRecaptcha = /recaptcha|Invalid domain for site key/i.test(this.state.error.message);
      return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Something went wrong
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {isRecaptcha ? (
                <>
                  A security widget (reCAPTCHA) isn’t set up for this domain yet. The site owner
                  can add <strong>symposia.us</strong> in the Google reCAPTCHA admin console.
                </>
              ) : (
                'The app hit an error. Try refreshing the page.'
              )}
            </p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false, error: null })}
              className="bg-symposia-turquoise text-white px-6 py-2 rounded-md hover:opacity-90"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
