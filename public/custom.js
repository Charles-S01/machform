$(document).ready(() => {
    console.log("Ready!!!")
    
    function validate(value, fieldId) {
        let msg = ""
        switch(fieldId) {
            case "element_1":
                msg = `Cannot enter value: ${value}`
                console.log(msg)
                break;
            case y:
                // code block
                break;
            default:
                // code block
        }

        showMessage(msg)

        // return false
    }

    function showMessage(msg) {
        alert(msg)
    }
    
    $("#element_1").change(function() {
        const value = $("#element_1").val()
        console.log('element_1 field changed')
        console.log(value)
        validate(value, this.id)

        // if (!validate(value, this.id)) {
        //     alert(`Cannot enter ${value}`)
        //     console.log(`Cannot enter ${value}`)
        // }
    })

    $("form").submit(function() {
        const entry1 = $("#element_1").val()
        alert(`Submitted: ${entry1}`)
    })
})
