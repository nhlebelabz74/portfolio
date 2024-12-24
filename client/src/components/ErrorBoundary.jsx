import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
  
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
  
    componentDidCatch(error, errorInfo) {
        console.error('3D Model Error:', error, errorInfo);
    }
  
    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex items-center justify-center mt-20">
                    <div className="text-center text-red-500">
                        <h2 className="text-xl font-bold mb-2">Sorry, something went wrong</h2>
                        <p className="text-sm opacity-75">Error loading 3D model</p>
                        <button 
                            onClick={() => window.location.reload()}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }
  
        return this.props.children;
    }
}

export default ErrorBoundary;