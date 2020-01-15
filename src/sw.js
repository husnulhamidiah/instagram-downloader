if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('service-worker.js')
		.then(function(reg){
			console.log("Service worker registered.");
	 }).catch(function(err) {
			console.log("Service worker not registered. This happened:", err)
	});
}

window.addEventListener('beforeinstallprompt', (e) => {
  showInstallPromotion();
});

window.addEventListener('DOMContentLoaded', () => {
	const parsedUrl = new URL(window.location)
	const text = parsedUrl.searchParams.get('text')

	if (!text) return
	
	const event = new CustomEvent('share', { detail: text })
	window.dispatchEvent(event)
});