// ============================================================================
// GOOGLE ANALYTICS CONFIGURATION
// ============================================================================
// Instructions:
// 1. Find your Google Analytics Measurement ID (it usually starts with "G-")
// 2. Paste it inside the quotes below.
// Example: const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
// ============================================================================

const GA_MEASUREMENT_ID = ''; // <-- PASTE YOUR ID HERE

// ============================================================================
// DO NOT MODIFY BELOW THIS LINE
// ============================================================================
if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.trim() !== '') {
    // 1. Load the Google Analytics script dynamically
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(gaScript);

    // 2. Initialize the dataLayer and tracking logic
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    // 3. Configure tracking for the current page
    gtag('config', GA_MEASUREMENT_ID);
}
