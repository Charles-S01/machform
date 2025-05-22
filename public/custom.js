$(document).ready(() => {
    console.log("Ready!!")
    
    const numOfFields = 2

    const fields = new Map()
    for (let i = 1; i <= numOfFields; i++) {
        fields.set(`element_${i}`, false)
    }
    
    function validate(value, fieldId) {
        let isValid = true
        let errorMsg = ''

        switch(fieldId) {
            case "element_1":
                const pattern = /yorku/i
                isValid = pattern.test(value)
                fields.set(fieldId, isValid)
                errorMsg = 'Invalid. Must contain yorku'
                break
            case "element_2":
                isValid = /uni/i.test(value)
                fields.set(fieldId, isValid)
                errorMsg = 'Invalid. Must contain uni'
                break
            default:
                // code block
        }
        document.getElementById('submit_form').removeAttribute('disabled')
        showMessage({isValid, errorMsg, value, fieldId})
    }

    function showMessage({isValid, value, errorMsg, fieldId}) {
        let inputEl = document.getElementById(fieldId)
        document.getElementById(`${fieldId}_msg`)?.remove()

        if (!isValid) {
            const newMsg = document.createElement('p')
            newMsg.id = `${fieldId}_msg`
            newMsg.style.color = 'red'
            newMsg.textContent = errorMsg

            inputEl.style.borderColor = 'red'
            const container = inputEl.parentNode
            container.append(newMsg)

            console.log(errorMsg)
        }
        else {
            inputEl.style.borderColor = 'green'
        }
    }
    
    $("#element_1").change(function() {
        const value = $("#element_1").val()
        console.log(`element_1 input: ${value}`)
        validate(value, this.id)
    })

    $("#element_2").change(function() {
        const value = $("#element_2").val()
        console.log(`element_2 input: ${value}`)
        validate(value, this.id)
    })


    function isAllFieldsValid() {
        if (fields.size == numOfFields) {
            let isAllValid = true
            for (const [field, isValid] of fields) {
                if (!isValid) {
                    isAllValid = false
                    break
                }
            }
            return isAllValid
        }
        return false
    }

    $("form").submit(function(e) {
        console.log('clicked submit')
        if (!isAllFieldsValid()) {
            e.preventDefault()
            console.log('Invalid entries')
            alert('Invalid entries')
        }
        else {
            document.getElementById('submit_form').removeAttribute('disabled')
            console.log('Submitted!')
        }
    })
})
