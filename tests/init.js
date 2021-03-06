load("galen-bootstrap/galen-bootstrap.js");

$local = "http://localhost";
$prod = "https://www.thoughtworks.com";
$grid = "http://localhost:4444/wd/hub";
$gridAppium = "http://127.0.0.1:8001/wd/hub";


$galen.settings.website = $prod;


$galen.registerDevice("mobile-c", inLocalBrowser("mobile emulation", "322x568", ["mobile"], "chrome"));
$galen.registerDevice("mobile-f", inLocalBrowser("mobile emulation", "322x568", ["mobile"]));
$galen.registerDevice("tablet", inLocalBrowser("tablet emulation", "620x540", ["tablet"], "chrome"));
$galen.registerDevice("desktop", inLocalBrowser("desktop emulation", "1450x800", ["desktop"], "chrome"));

/* for running test on mobile device using appium:
$galen.registerDevice("mobile-android-c", inSeleniumGrid($gridAppium, "real mobile Android", ["mobile"], {desiredCapabilities:{browserName: "Chrome", platformName: "Android",deviceName:"Sony Mobile", bundleId:"com.android.chrome"}}));
*/

/* for grid testing use the following
$galen.registerDevice("desktop-c", inSeleniumGrid($grid, "desktop chrome", ["desktop"], {size: "1450x800",browser: "chrome"}));
$galen.registerDevice("desktop-f", inSeleniumGrid($grid, "desktop firefox", ["desktop"], {size: "1450x800",browser: "firefox"}));
$galen.registerDevice("tablet-c", inSeleniumGrid($grid, "tablet chrome", ["tablet"], {size: "620x540",browser: "chrome"}));
$galen.registerDevice("tablet-f", inSeleniumGrid($grid, "tablet firefox", ["tablet"], {size: "620x540",browser: "firefox"}));
$galen.registerDevice("mobile-c", inSeleniumGrid($grid, "mobile chrome", ["mobile"], {size: "322x568",browser: "chrome"}));
$galen.registerDevice("mobile-f", inSeleniumGrid($grid, "mobile firefox", ["mobile"], {size: "322x568",browser: "firefox"}));
*/
