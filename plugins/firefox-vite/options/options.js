import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

document.getElementById('goUrlSettings').addEventListener('submit', function(e) {
    e.preventDefault();
    var url = document.getElementById('rootUrl').value;
    browser.storage.local.set({ goUrlSettingsRootUrl: e.target.checked });
});

// Populate the form field with the value of goUrlSettingsRootUrl
document.addEventListener('DOMContentLoaded', function() {
    browser.storage.local.get('goUrlSettingsRootUrl').then(function(result) {
        console.log(result)
        console.log("This ran too")
        document.getElementById('rootUrl').value = result.goUrlSettingsRootUrl;
    });
});

document.addEventListener('addNewRoute', function(e) {
    e.preventDefault();
})
