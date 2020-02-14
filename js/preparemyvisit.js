$('.pmv-content-1').hide();
$('.pmv-content-2').hide();
$('.pmv-content-3').hide();

$('#pmv-id-1').on('click', function(){
    $('.pmv-content-1').show();
    $('.pmv-content-2').hide();
    $('.pmv-content-3').hide();
});

$('#pmv-id-2').on('click', function(){
    $('.pmv-content-2').show();
    $('.pmv-content-1').hide();
    $('.pmv-content-3').hide();
});

$('#pmv-id-3').on('click', function(){
    $('.pmv-content-3').show();
    $('.pmv-content-1').hide();
    $('.pmv-content-2').hide();
});

var tarif_baby  = 0
var tarif_kid   = 12.5
var tarif_teen  = 13.5
var tarif_adult = 15

function costVisit(baby2,kid2,teen2,adult2){
    var baby2 = $('#baby2').val()
    var kid2 = $('#kid2').val()
    var teen2 = $('#teen2').val()
    var adult2 = $('#adult2').val()

    var cost = (baby2*tarif_baby) + (kid2*tarif_kid) + (teen2*tarif_teen) + (adult2*tarif_adult)
    return cost
}

$('#pmv-plus-baby').on('click', function(){
    var getBaby = $('#baby2');
    var baby2 = getBaby.val();
    if(baby2 < 20){
        baby2++;
        $('#baby2').attr({
            value: baby2
        });
    }else baby2 = 20;
    $('#rft').text(costVisit(baby2,kid2,teen2,adult2))
});

$('#pmv-plus-kid').on('click', function(){
    var getKid = $('#kid2');
    var kid2 = getKid.val();
    if(kid2 < 20){
        kid2++;
        $('#kid2').attr({
            value: kid2
        });
    }else kid2 = 20;
    $('#rft').text(costVisit(baby2,kid2,teen2,adult2))
});

$('#pmv-plus-teen').on('click', function(){
    var getTeen = $('#teen2');
    var teen2 = getTeen.val();
    if(teen2 < 20){
        teen2++;
        $('#teen2').attr({
            value: teen2
        });
    }else teen2 = 20;
    $('#rft').text(costVisit(baby2,kid2,teen2,adult2))
});

$('#pmv-plus-adult').on('click', function(){
    var getAdult = $('#adult2');
    var adult2 = getAdult.val();
    if(adult2 < 20){
        adult2++;
        $('#adult2').attr({
            value: adult2
        });
    }else adult2 = 20;
    $('#rft').text(costVisit(baby2,kid2,teen2,adult2))
});

$('#pmv-moins-baby').on('click', function(){
    var getBaby = $('#baby2');
    var baby2 = getBaby.val();
    if(baby2 > 0){
        baby2--;
        $('#baby2').attr({
            value: baby2
        });
    }else baby2 = 0;
    $('#rft').text(costVisit(baby2,kid2,teen2,adult2))
});

$('#pmv-moins-kid').on('click', function(){
    var getKid = $('#kid2');
    var kid2 = getKid.val();
    if(kid2 > 0){
        kid2--;
        $('#kid2').attr({
            value: kid2
        });
    }else kid2 = 0;
    $('#rft').text(costVisit(baby2,kid2,teen2,adult2))
});

$('#pmv-moins-teen').on('click', function(){
    var getTeen = $('#teen2');
    var teen2 = getTeen.val();
    if(teen2 > 0){
        teen2--;
        $('#teen2').attr({
            value: teen2
        });
    }else teen2 = 0;
    $('#rft').text(costVisit(baby2,kid2,teen2,adult2))
});

$('#pmv-moins-adult').on('click', function(){
    var getAdult = $('#adult2');
    var adult2 = getAdult.val();
    if(adult2 > 0){
        adult2--;
        $('#adult2').attr({
            value: adult2
        });
    }else adult2 = 0;
    $('#rft').text(costVisit(baby2,kid2,teen2,adult2))
});

$('#rft').text(costVisit(baby2,kid2,teen2,adult2))