$(document).ready(() => {
    console.log("Ready!!!")
    
    function validate(value) {

        return false
    }
    
    $("#element_1").change(() => {
        const value = $("#element_1").val()
        console.log('element_1 field changed')
        console.log(value)
        if (!validate(value)) {
            alert(`Cannot enter ${value}`)
            console.log(`Cannot enter ${value}`)
        }
    })

    $("form").submit(() => {
        const entry1 = $("#element_1").val()
        alert(`Field 1 entry: ${entry1}`);
    });
})
