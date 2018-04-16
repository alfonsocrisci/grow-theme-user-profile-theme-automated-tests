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
        /* Tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('is present on page', function() {
            expect($('head')).toContainText('frontenduserprofilegrow_WAR_growthemeuserprofile');
        });
    });

}());