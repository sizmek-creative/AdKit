# AdKit 360° Viewer component

> The 360° Viewer component allows you to rotate a video or image 360 degrees around its axis. The 360° Viewer component works on desktop and mobile, using orientation, touch, mouse and keyboard events to rotate the object.

- Supports both video and image
- Accelerometer supported movement
- VR support - (limited to Google Cardboard)
- Customizable viewing angle

## Configuration

  <a name="configuration--config.js"></a><a name="1.1"></a>
  - [1.1](#configuration--config.js) **config.js file**: json object containing component configuration.

    - `string`
    - `number`
    - `boolean`
    - `null`
    - `undefined`

    ```javascript
    define({
      "banners": [{
        "id": "Master_Banner",
        "items": [
        // -- START OF THE RELEVANT COMPONENT CONFIGURATION --
          {
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
          }
          // -- END OF THE RELEVANT COMPONENT CONFIGURATION --
        ]
      }]
  });
    ```
