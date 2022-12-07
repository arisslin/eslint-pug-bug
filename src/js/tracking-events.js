// Important!!!
// If you edit this function, please update function in nginx/errorPage/410.html as well
// eslint-disable-next-line @typescript-eslint/typedef,@typescript-eslint/no-unused-vars
export function pushErrorPageTrackingEvent(event, title, pageUrl, pagePath) {
  const sendEvent = () => {
    window.dataLayer = window.dataLayer || [];
    const dataLayer = window.dataLayer;
    const isConsentStatusSet = dataLayer.some(
      (obj) => obj.event === 'consent_status' && obj.type === 'explicit'
    );
    if (isConsentStatusSet) {
      clearInterval(consentStatusCheckInterval);
      dataLayer.push({
        event: event,
        page_title: title,
        page_url: pageUrl,
        page_path: pagePath,
      });
    }
  };

  const consentStatusCheckInterval = setInterval(sendEvent, 100);
}
