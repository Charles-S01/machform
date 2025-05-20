$(document).ready(() => {
    console.log("Ready!!!")
    
    function validate(value, fieldId) {
        let isValid = true

        switch(fieldId) {
            case "element_1":
                const pattern = /yorku/i;
                isValid = pattern.test(value);

                break;
            case y:
                // code block
                break;
            default:
                // code block
        }

        showMessage(isValid, value)
    }

    function showMessage(isValid, value) {
        if (!isValid) {
            console.log('Invalid entry')
            alert(`Cannot enter: ${value}`)
        }
    }
    
    $("#element_1").change(function() {
        const value = $("#element_1").val()
        console.log(`element_1 input: ${value}`)
        validate(value, this.id)

    })

    $("form").submit(function() {
        const entry1 = $("#element_1").val()
        alert(`Submitted: ${entry1}`)
    })
})
