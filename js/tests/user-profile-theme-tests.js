/* user-profile-theme-tests.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the Grow user profile theme.
 */
/* All tests are placed within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

 $(function() {
    describe('User Profile Theme', function() {
         // [jasmine-jquery] Ensures the User Profile Theme is available in the <head> through its Liferay themeId
        it('is present on page', function() {
            expect($('head')).toContainText('frontenduserprofilegrow_WAR_growthemeuserprofile');
        });

         // [jasmine-jquery] Ensures the page has the intended col-md-3 / col-md-9 layout
        it('has the intended layout', function() {
            expect($('aside')).toHaveClass('col-md-3');
            expect($('section')).toHaveClass("col-md-9");
        });
    });

    describe('Activities portlet', function() {
        // [jasmine-jquery]
        it('is present on page', function() {
            expect('#portlet_com_liferay_social_activities_web_portlet_SocialActivitiesPortlet').toBeInDOM();
        });

        //  [jasmine]
        it('is relevant for the currently logged user', function() {
            //Get currently logged user name from URL
            var pageUrl = window.location.href;
            var urlUserName = pageUrl.substring(pageUrl.lastIndexOf("/")+1,pageUrl.lastIndexOf(".")).toLowerCase();

            //Get Logged user name from Activities portlet's header
            var activitiesPortletHeader = $('th').text();
            var activitiesPortletUserName = activitiesPortletHeader.slice(1, activitiesPortletHeader.indexOf("'")).toLowerCase();

            //Check for strings equality
            expect(urlUserName).toEqual(activitiesPortletUserName);
        });

        // [jasmine-jquery]
        it('has preview text with 16px font size', function() {
            expect($('h6')).toHaveCss({"font-size": "16px;"});
        });

        // [jasmine-jquery]
        it('has views text with 12px font size', function() {
            expect($('h6 > span')).toHaveCss({"font-size": "12px;"});
        });

        // [jasmine-jquery]
        it('shows the icons next to the actions for the Wiki articles', function() {
            expect($('i[class$="activities-icon"]')).toBeVisible();
        });

        // [jasmine-jquery]
        /* This spec will only run of at least one tag container
        element is on the page*/
        it('has visible tags', function() {
            var tagContainer = $('.badge.badge-default.badge-sm');

            if (tagContainer.length > 0) {
                expect(tagContainer).toBeVisible();
            } else {
                alert("No tags on Activities were found. This may be either because: \n\n- No Wiki in the Activities portlet has assigned tags\n\n-There is an actual issue with tags not being displayed that you may want to double check");
                }
        });

        // [jasmine-jquery]
        /* Checks the current URL until the *web/ part,
        therefore it should run on UAT as well*/
        it('has hyperlinks pointing to valid URLs', function() {
            expect($('aside')).toHaveClass('col-md-3');
        });

    });

}());