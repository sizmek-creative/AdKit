# AdKit 360° Viewer component

> The 360° Viewer component allows you to rotate a video or image 360 degrees around its axis. The 360° Viewer component works on desktop and mobile, using orientation, touch, mouse and keyboard events to rotate the object.

- Supports both video and image
- Accelerometer supported movement
- VR support - (limited to Google Cardboard)
- Customizable viewing angle

## Configuration

  <a name="configuration--config.js"></a><a name="1.1"></a>
  - [1.1](#configuration--config.js) **config.js file**: json object containing component configuration.

    - `id` - container id.
    - `type` - `adkit-video360` for video or `adkit-image360` for image.
    - `showControls` - true \ false value to show the controls.
    - `muted` - true \ false value to mute the video.
    - `media` - array of asset paths.
    - `settings` - object containing specific component settings:
                 -- show360Reminder - true \ false value to show 360 reminder icon when the component loads.
                 -- fov - value between 30 - 120 to set the viewing angle.
                 -- disableAccelerometer - true \ false to disable accelerometer on mobile.
    
    
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
