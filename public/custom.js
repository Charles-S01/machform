$(document).ready(() => {
    console.log("Ready!!!")
    
    function validate(value, fieldId) {
        let isValid = true
        let msg = ''

        switch(fieldId) {
            case "element_1":
                const pattern = /yorku/i;
                isValid = pattern.test(value);
                msg = 'Invalid. Must contain yorku'
                break;
            case y:
                // code block
                break;
            default:
                // code block
        }

        showMessage(isValid, value, msg)
    }

    function showMessage(isValid, value, msg) {
        if (!isValid) {
            const newMsg = document.createElement('p');
            newMsg.textContent = msg
            newMsg.style.color = 'red'

            const container = document.getElementById('element_1').parentNode
            container.append(newMsg)

            console.log(msg)
            // alert(`Cannot enter: ${value}`)
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
