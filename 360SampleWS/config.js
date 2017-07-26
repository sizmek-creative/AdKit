define({
	"banners": [{
		"id": "Master_Banner",
		"items": [{
			"id": "containerId",
			"type": "adkit-video360",
			"showControls": true,
			"muted": true,
			"media": ["assets/SampleVideo_1080x720_1mb.mp4"],
			"settings": {
				"show360Reminder": true,
				"fov": 60,
				"disableAccelerometer": false
			},
			"autoPlay": {
				"delay": 0
			},
			"width": 240,
			"height": 180,
			"top": 0,
			"left": 0,
			"position": "absolute"
		}]
	}]
});
