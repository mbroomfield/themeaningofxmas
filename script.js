$( document ).ready( function() {
    getNewQuery();;
    
    $( 'body' ).on( 'click', '.new-xmas', function( e ) {
        e.preventDefault();
        getNewQuery();
    } );
});

function getNewQuery() {
    var content = $( '.content' );
    $.ajax( "data.php" ).done(function( response ) {
        content.fadeTo( 250, 0, function() {
            content.html( response );
            content.fadeTo( 250, 1 );
        } );
    })
}