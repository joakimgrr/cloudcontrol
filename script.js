chrome.browserAction.onClicked.addListener(function(tab) { 
	// alert('icon clicked');
	getSoundcloudTab(function(data){
		injectScript(data.id);
	})
});

function getSoundcloudTab(callback) {
	// Query filter to be passed to chrome.tabs.query - see
	// https://developer.chrome.com/extensions/tabs#method-query
	var queryInfo = {
		currentWindow: true
	};

	chrome.tabs.query(queryInfo, function(tabs) {
		var url;
		tabs.forEach(function(tab) {
			url = tab.url;

			// jos löytyy useampi, katso missä nappulassa on play classi
			if(url.indexOf('soundcloud.com') !== -1){
				callback(tab);
			}
		});
	});
};

function injectScript(id) {
	var details = {
		file: "sc.js"
	}
	
	chrome.tabs.executeScript(id, details, function (result) {
		if(result == "true"){
			chrome.browserAction.setIcon({path: 'icon-pause.png'});
		}else{
			chrome.browserAction.setIcon({path: 'icon-play.png'});
		}
	});
}