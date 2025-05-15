$(document).ready(() => {
    console.log("Ready!")
    function validate(value) {
        return false
    }

    $("#element_1").on("blur", () => {
        var value = $(this).val()
        if (!validate(value)) {
            alert(`Cannot enter ${value}`)
        }
    })
})
