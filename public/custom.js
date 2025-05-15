$(document).ready(() => {
    console.log("Ready!")
    function validate(value) {
        return false
    }
    
    $("#element_1").on("blur", () => {
        var value = $(this).val()
        console.log('Lost focus on element_1 field')
        console.log(value)
        if (!validate(value)) {
            alert(`Cannot enter ${value}`)
            console.log(`Cannot enter ${value}`)
        }
    })
})
