$(document).ready(() => {
    console.log("Ready!!!")

    const numOfFields = 1

    const fields = new Map()
    for (let i = 1; i <= numOfFields; i++) {
        fields.set(`element_${i}`, false)
    }
    
    function validate(value, fieldId) {
        let isValid = true
        let errorMsg = ''

        switch(fieldId) {
            case "element_1":
                const pattern = /^[A-Z]{2}\s[A-Z]{4}\s\d{4}\sCr=[1-9]\.00\s[A-Z]$/
                isValid = pattern.test(value)
                fields.set(fieldId, isValid)
                errorMsg = 'Invalid format'
                break
            case "element_2":
            //     isValid = /uni/i.test(value)
            //     fields.set(fieldId, isValid)
            //     errorMsg = 'Invalid. Must contain uni'
                break
            default:
                // nothing
        }
        document.getElementById('submit_form').removeAttribute('disabled')
        showMessage({isValid, errorMsg, fieldId})
    }

    function showMessage({isValid, errorMsg, fieldId}) {
        let inputEl = document.getElementById(fieldId)
        document.getElementById(`${fieldId}_msg`)?.remove()

        if (!isValid) {
            inputEl.style.borderWidth = '2px'
            inputEl.style.borderColor = 'red'

            const newMsg = document.createElement('p')
            newMsg.id = `${fieldId}_msg`
            newMsg.style.color = 'red'
            newMsg.textContent = errorMsg

            const container = inputEl.parentNode
            container.append(newMsg)

            console.log(errorMsg)
        }
        else {
            inputEl.style.borderWidth = '4px'
            inputEl.style.borderColor = ''
        }
    }
    
    $("#element_1").change(function() {
        const value = $("#element_1").val()
        console.log(`element_1 input: ${value}`)
        validate(value, this.id)
    })

    // $("#element_2").change(function() {
    //     const value = $("#element_2").val()
    //     console.log(`element_2 input: ${value}`)
    //     validate(value, this.id)
    // })

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
        console.log('submitting...')
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
