jquery-retina-data
==================

A jquery retina display via data plugin

## Facts
* 770 bytes uncompressed
* 238 bytes compressed (That is insane!!!)
* Built to be small, fast, and simple

## JS Usage
```html
<script src="jquery.retinaData.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $('img').retinaData();
    });
</script>
```

The example above shows an attempt to replace all images with high resolutions versions. If you only want to attempt to replace some images (for better performance) you may specify a specific class: Eg.

```js
$('img.retina').retinaData();
```

To check if the image exists before showing use the jquery.retinaDataCheck.js file like so:
```html
<script src="jquery.retinaDataCheck.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $('img').retinaData();
    });
</script>
```

## Image Usage
The image must have a src and data-retina set like so:
```html
<img class="retina" src="100x100.jpg" data-retina="200x200.jpg" width="100" height="100" alt="Sample">
```
Then when retinaData runs you will have (if the display is retina):
```html
<img class="retina" src="200x200.jpg" data-retina="200x200.jpg" width="100" height="100" alt="Sample">
```
## Variable definitions
* i = index
* e = element
* r = retina url
* h = holder
