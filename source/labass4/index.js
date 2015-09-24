/**
 * Created by Harshi on 9/21/15.
 */

$(document).ready(function(){
    //var data = 'test';
    //Defauly size 200
    var size = 200;

    $('#submitBtn').click(function(){

        var data = $('#userName').val();
        localStorage.setItem('userName', data);

    });

    var getVariable = localStorage.getItem('userName');

    $('#welcomeText').html('Welcome ' + getVariable);

    //alert(data);
    //Get the QR code image form API
    $('#qrImg').html('<img src="https://api.qrserver.com/v1/create-qr-code/?data='+getVariable+'&amp;size='+size+'x'+size+'" alt="" title="" />');



    $('#dicBtn').click(function(){


        var address = $('#address').val();

        $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=AIzaSyAheS8Atosp_7xv9W3TK-SKIqcBRfevK54',
            success: function (data) {

                //alert(data.results[0].formatted_address);
                var lat = data.results[0].geometry.location.lat;
                var long = (data.results[0].geometry.location.lng * -1);

                $('#addressResp').html('<span style="font-size: large;">Formatted Address Searched: </span><br/>' + data.results[0].formatted_address );

                $('#coordinates').html('<span style="font-size: large;"> Resulted Co-ordinates: </span><br/>'
                    +'<b>Latitude: </b>'+ data.results[0].geometry.location.lat +'<br/><b>Longitude: </b>' + data.results[0].geometry.location.lng);

                $('#tempHead').html('QR Codes for Latitude and Longitude:');

                $('#latQR').html('<img src="https://api.qrserver.com/v1/create-qr-code/?data='+lat+'&amp;size='+150+'x'+150+'" alt="" title="" />');

                $('#longQR').html('<img src="https://api.qrserver.com/v1/create-qr-code/?data='+long+'&amp;size='+150+'x'+150+'" alt="" title="" />');


            },
            error: function(){
                alert("Cannot get data for the searched address");
            }

        });

    });

    //search button for dictionary clicked
    //$('#dicBtn').click(function(){
    //    $('#dicResponse').text('');
    //
    //    var dicWord = $('#dicWord').val();
    //
    //    $.ajax({
    //        url: 'https://montanaflynn-dictionary.p.mashape.com/define?word='+dicWord,
    //        headers: {
    //            'X-Mashape-Key':'IhKWSYw6pomsh8nhbxOUfxZPWaTPp1a7mDkjsnxK9TS8pogNSu',
    //            'Accept':'application/json'
    //        },
    //        success: function (data) {
    //
    //            $.each(data.definitions, function(index, element) {
    //
    //                $('#dicResponse').append(
    //                    '<p>'
    //                    +'<span><b>Text: </b></span><span>'+element.text+'</span>'
    //                    +'<br/>'
    //                    +'<span><b>Attribution: </b></span><span>element.attribution</span>'
    //                    +'</p>'
    //                );
    //
    //                //alert(element.text);
    //            });
    //
    //            //$('#dicResponse').html(JSON.stringify(data));
    //
    //        },
    //        error: function(){
    //            alert("Cannot get data for the word searched");
    //        }
    //
    //    });
    //
    //});






});
