// import React, { Component } from 'react';

// class ErrorBoundary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }

//     static getDerivedStateFromError(error) {
//         // Update state so the next render will show the fallback UI.
//         return { hasError: true };
//     }

//     componentDidCatch(error, errorInfo) {
//         // You can also log the error to an error reporting service
//         console.error('Error caught by error boundary:', error, errorInfo);
//     }

//     render() {
//         if (this.state.hasError) {
//             // Fallback UI when there's an error
//             return (
//                 <div className="error-boundary">
//                     <h2>Something went wrong.</h2>
//                     <p>Please try refreshing the page or contact support.</p>
//                 </div>
//             );
//         }

//         // Render children if there's no error
//         return this.props.children;
//     }
// }

// export default ErrorBoundary;
