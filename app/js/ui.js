/*jslint browser: true*/
/*global  $*/
$(function () {
    "use strict";

    $('.frame .frame-title .dropdown-menu .btn').click(function (event) {
        event.preventDefault();
    });

    $('[rel="tooltip"]').tooltip();
});