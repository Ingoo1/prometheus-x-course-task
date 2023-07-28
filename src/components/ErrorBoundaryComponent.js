import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('ERROR_BOUNDARY LOG ', error, errorInfo);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
