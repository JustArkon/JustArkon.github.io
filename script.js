function main() {
    let targetUrl = '';
    const $modal = $('#exit-modal');

    $('.btn-purple').on('click', function(e) {
        e.preventDefault();
        targetUrl = $(this).attr('href');
        $modal.addClass('active');
    });

    $('#modal-confirm').on('click', function() {
        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });

    $('#modal-cancel').on('click', function() {
        $modal.removeClass('active');
        targetUrl = '';
    });

    $modal.on('click', function(e) {
        if (e.target === this) {
            $modal.removeClass('active');
            targetUrl = '';
        }
    });
}

$(document).ready(main);