import React, { useState } from 'react';

const AccessibleToggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [hasError, setHasError] = useState(false); // New error state

  const handleToggle = () => {
    // Simulating a random API error for demonstration
    const randomError = Math.random() > 0.5;
    
    if (randomError) {
      setHasError(true);
    } else {
      setHasError(false);
      setIsToggled(!isToggled);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Accessibility (ARIA) Example</h2>
      
      <div
        role="switch"
        aria-checked={isToggled}
        aria-invalid={hasError} // Indicates error state
        aria-errormessage={hasError ? "toggle-error" : undefined} // Links to the error message ID
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
        style={{
          width: '50px',
          height: '24px',
          backgroundColor: isToggled ? '#4CAF50' : '#ccc',
          border: hasError ? '2px solid red' : '2px solid transparent', // Visual focus for error
          borderRadius: '12px',
          position: 'relative',
          cursor: 'pointer',
          outlineOffset: '4px'
        }}
        aria-label="Enable notifications"
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'white',
            borderRadius: '50%',
            position: 'absolute',
            top: '0px',
            left: isToggled ? '26px' : '0px',
            transition: 'left 0.2s ease'
          }}
        />
      </div>
      
      <p>Notifications are currently <strong>{isToggled ? 'On' : 'Off'}</strong></p>

      {/* Screen reader alert for errors */}
      {hasError && (
        <div 
          id="toggle-error" 
          role="alert" 
          aria-live="assertive" 
          style={{ color: 'red', marginTop: '10px' }}
        >
          Error: Unable to update notification preferences. Please try again.
        </div>
      )}
    </div>
  );
};

export default AccessibleToggle;