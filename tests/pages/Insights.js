
this.Insights = $page("Insights", {
    articleContainer: "#flowing-insights-articles-container",
    loadMoreButton: "#show-more-insights div div a",
    acceptCookiesButton: "#onetrust-accept-btn-handler"
}, {
    acceptCookies: loggedFunction("Accept cookies if needed", function () {
        Thread.sleep(1000);
        this.acceptCookiesButton.click();
    })
,
    loadMoreResults: loggedFunction("Click load more button to show more article", function(){
        this.loadMoreButton.click();
    })

});
