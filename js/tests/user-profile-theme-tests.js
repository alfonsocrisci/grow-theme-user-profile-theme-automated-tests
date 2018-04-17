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
    });

}());