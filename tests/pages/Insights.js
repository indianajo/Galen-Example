
this.Insights = $page("Insights", {
    articleContainer: "#flowing-insights-articles-container",
    loadMoreButton: "#show-more-insights div div a"
}, {
    loadMoreResults: loggedFunction("Click load more button to show more article", function(){
        this.loadMoreButton.click();
    })

});