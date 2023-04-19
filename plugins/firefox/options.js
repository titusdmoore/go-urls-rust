import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.data('linksForm', () => ({
    links: [],
    loading: true,

    init() {
        console.log('init')
        fetch('localhost:4545/links').then(response => response.json()).then(response => {
            console.log(response)
            this.links = response
            this.loading = false
        })
    }
}))

Alpine.start()

document.getElementById('goUrlSettings').addEventListener('submit', function(e) {
    e.preventDefault();
    var url = e.target.rootUrl.value;
    browser.storage.local.set({ goUrlSettingsRootUrl: url });
});

// Populate the form field with the value of goUrlSettingsRootUrl
document.addEventListener('DOMContentLoaded', function() {
    browser.storage.local.get('goUrlSettingsRootUrl').then(function(result) {
        document.getElementById('rootUrl').value = result.goUrlSettingsRootUrl;
    });
});

document.addEventListener('addNewRoute', function(e) {
    e.preventDefault();
})
