load("init.js");
load("pages/Insights.js");

testOnAllDevices("Insights test", "/insights/software-testing", function (driver, device) {
    insights = new Insights(driver).waitForIt();
    checkLayout(driver, "specs/insights.gspec", device.tags, device.excludedTags);
    insights.loadMoreResults();
    
});