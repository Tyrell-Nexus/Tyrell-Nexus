//basic system to retrieve uploadcare data and store in inputs to allow SQL manipulation

// get a widget reference
const widget = uploadcare.Widget("[role=uploadcare-uploader]");

// listen to the "change" event
widget.onChange(async (group) => {
    const files = await Promise.all(group.files());
    const urls = files.map(file => file.cdnUrl);
    const exts = files.map(file => file.originalImageInfo.format);
    $('#fileUrls').val(urls);
    $('#fileExts').val(exts);
    console.log(urls);
    console.log(exts);
});
