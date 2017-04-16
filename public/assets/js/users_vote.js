/**
 * Created by i327364 on 23/03/2017.
 */
$('.usersVoteBtn').click(function(e){
    e.preventDefault();
    var data = $(this).closest('tr').data();
    var voteObj = {vote: $(this).data('score')};
    $('[data-team-id="'+data.teamId+'"] .status-container .spinner').show();
    $.ajax({
        method:'PUT',
        url:'/vote/' + data.teamId,
        data: voteObj,
        success: function(res){
            $('[data-team-id="'+res.teamId+'"] button').removeClass('btn-success');
            $('[data-team-id="'+res.teamId+'"] [data-score="'+res.vote+'"]').addClass('btn-success');
            var $statusContainer = $('[data-team-id="'+res.teamId+'"] .status-container');
            $statusContainer.find('.spinner').hide();
            $statusContainer.find('.thumbs-up').show(200);
        },
        error: function(){
            console.log("Error on vote, sorry");
        }
    });
    return false;
});