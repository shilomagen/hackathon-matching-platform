/**
 * Created by i327364 on 23/03/2017.
 */
$('.usersVoteBtn').click(function(e){
    e.preventDefault();
    var data = $(this).closest('tr').data();

    return false;
});