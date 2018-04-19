AUI().ready(

    /*
    This function gets loaded when all the HTML, not including the portlets, is
    loaded.
    */

    function() {
    }
);

Liferay.Portlet.ready(

    /*
    This function gets loaded after each and every portlet on the page.

    portletId: the current portlet's id
    node: the Alloy Node object of the current portlet
    */

    function(portletId, node) {
    }
);

Liferay.on(
    'allPortletsReady',

    /*
    This function gets loaded when everything, including the portlets, is on
    the page.
    */

    function() {
    }
);

/*==== Start custom modifications ====*/

/*Adds Font Awesome alloy icons on Activities portlet*/
var elemCreatedActivity = $('font:contains("Created")');
var elemEditedActivity = $('font:contains("Updated")');
var elemCommentedActivity = $('font:contains("Commented")');
var elemMovedToTrashActivity = $('font:contains("Removed")');

elemCreatedActivity.prepend('<i class="icon-plus-sign activities-icon"></i>');
elemEditedActivity.prepend('<i class="icon-edit activities-icon"></i>');
elemCommentedActivity.prepend('<i class="icon-comment activities-icon"></i>');
elemMovedToTrashActivity.prepend('<i class="icon-trash activities-icon"></i>');