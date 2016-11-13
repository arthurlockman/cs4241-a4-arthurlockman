var isEditVisible = false

window.onload = function () {
    $('#addMovieForm').hide()
    $('.btn-delete').hide()
    document.getElementById("editButton").addEventListener("click", editButtonClick)
}

function editButtonClick() {
    if (isEditVisible == true) {
        $('#addMovieForm').hide()
        $('.btn-delete').hide()
        isEditVisible = false
        $("#editButton").html('Edit')
    } else {
        $('#addMovieForm').show()
        $('.btn-delete').show()
        isEditVisible = true
        $("#editButton").html('Cancel')
    }
}