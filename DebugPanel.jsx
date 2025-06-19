
import React from 'react';
import { useAuth } from '../firebase/AuthContext';

export function DebugPanel() {
  const { user } = useAuth();
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, fontSize: '10px',
      backgroundColor: 'rgba(0,0,0,0.8)', color: 'lime', padding: '6px', zIndex: 1000
    }}>
      <div>User: {user ? user.email : 'No user logged in'}</div>
      <div>Status: {user === undefined ? 'Loading...' : 'Initialized'}</div>
      <div>App is active. Firebase config loaded.</div>
    </div>
  );
}
