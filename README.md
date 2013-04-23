jquery-retina-data
==================

A jquery retina display via data plugin

# Usage

<script src="js/jquery.retinaData.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function() {
        $('img').retinaData();
    });
</script>

The example above shows an attempt to replace all images with high resolutions versions. If you only want to attempt to replace some images (for better performance) you may specify a specific class: Eg.

$('img.retina').retinaData();
