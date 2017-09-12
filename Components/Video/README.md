# AdKit Video component

> The Video component allows you to play a video file and provides many video related capabilities that are configurable and controlled through the API.

## Configuration

  <a name="configuration--config.js"></a><a name="1.1"></a>
  - [1.1](#configuration--config.js) **config.js file**: json object containing component configuration.

    - [**General AdKit Component Configuration.**](http://github.com)
    - **type**: `adkit-media`.
    - **showControls**: true \ false value to show the controls.
    - **muted**: true \ false value to mute the video.
    - **media**: array of asset paths.
    - **autoPlay**: object containing the delay in milliseconds.

```javascript
define({
  "banners": [{
    "id": "Master_Banner",
      "items": [
        // -- START OF THE RELEVANT COMPONENT CONFIGURATION --
        {
          "id": "containerId",
          "type": "adkit-media",
          "showControls": true,
          "muted": true,
          "media": ["assets/SampleVideo_1080x720_1mb.mp4"],
          "autoPlay": {
            "delay": 0
          },
          "width": 240,
          "height": 180,
          "top": 0,
          "left": 0,
          "position": "absolute"
        }
        // -- END OF THE RELEVANT COMPONENT CONFIGURATION --
  ]}]
});
```
