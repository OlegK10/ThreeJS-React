import $ from 'jquery'

$('.Rinp5Fas').siblings('.Rinp5Fas_act').hide()

$('.Rinp5Fas').click(function (e) { 
    $('.Rinp5Fas').siblings('.Rinp5Fas_act').hide()
    $(this).siblings('.Rinp5Fas_act').show()
});