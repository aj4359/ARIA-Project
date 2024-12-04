import { useEffect } from 'react';
import { trackVisitor } from '../utils/visitorTracking';

export const useVisitorTracking = () => {
  useEffect(() => {
    const visitor = trackVisitor();
    console.log('Visitor tracked:', visitor);
  }, []);
};