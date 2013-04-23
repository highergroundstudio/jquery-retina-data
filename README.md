jquery-retina-data
==================

A jquery retina display via data plugin

# Usage

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
