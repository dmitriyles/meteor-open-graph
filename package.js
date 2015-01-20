Package.describe({
    summary: "OpenGraph support",
    name:    "longuniquename:open-graph",
    version: "0.0.1"
});

Package.onUse(function (api) {
    api.use([
        'tracker',
        'jquery',
        'underscore'
    ], 'client');

    api.use('iron:router', 'client', {weak: true});

    api.addFiles("og_client.js", 'client');
    api.export('OgMeta', 'client');
});
