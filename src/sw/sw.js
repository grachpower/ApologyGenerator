self.addEventListener("install", event => {
    console.log("Installed");

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache =>
                fetch("assets-manifest.json")
                    .then(response => response.json())
                    .then(assets =>
                        cache.addAll([
                            "/",
                            assets["main.js"],
                            "http://api.example.com/articles",
                        ])
                    )
            ).then(() => self.skipWaiting())
    );
});