$(document).ready(() => {
    console.log("Ready!!!")
    
    function validate(value, fieldId) {
        let isValid = true
        let errorMsg = ''

        switch(fieldId) {
            case "element_1":
                const pattern = /yorku/i;
                isValid = pattern.test(value);
                errorMsg = 'Invalid. Must contain yorku'
                break;
            case "element_2":
                console.log('')
                break;
            default:
                // code block
        }

        showMessage({isValid, value, errorMsg, fieldId})
    }

    function showMessage({isValid, value, errorMsg, fieldId}) {
        const newMsg = document.createElement('p');
        newMsg.id = `${fieldId}_msg`
        newMsg.style.color = isValid ? 'green' : 'red'
        newMsg.textContent = isValid ? 'Valid' : errorMsg

        const container = document.getElementById('element_1').parentNode
        document.getElementById(`${fieldId}_msg`)?.remove()
        container.append(newMsg)

        console.log(errorMsg)

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
