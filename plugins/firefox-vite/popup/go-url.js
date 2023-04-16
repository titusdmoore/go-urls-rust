document.getElementById('goUrlForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  browser.storage.local.get('goUrlSettingsRootUrl').then(function (result) {
    let rootUrl = result.goUrlSettingsRootUrl;

    let creating = browser.tabs.create({
      url: rootUrl + e.target.slug.value,
      active: true
    });
    creating.then(() => {
      console.log("created")
    }, () => {
      console.log("failed")
    });

    window.close();
  });
});