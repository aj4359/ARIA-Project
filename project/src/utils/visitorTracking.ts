export const trackVisitor = () => {
  const visitorData = {
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
    referrer: document.referrer,
    userAgent: navigator.userAgent,
    screenSize: `${window.innerWidth}x${window.innerHeight}`
  };

  // Store visitor data
  const visitors = JSON.parse(localStorage.getItem('visitors') || '[]');
  visitors.push(visitorData);
  localStorage.setItem('visitors', JSON.stringify(visitors));

  return visitorData;
};