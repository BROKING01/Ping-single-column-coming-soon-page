const submit = document.querySelector(".submit")
const input = document.querySelector("input")
const error = document.querySelector(".par")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const inputValue = input.value.trim()

    if (inputValue === "") {
        error.classList.remove("hidden")
    } else {
        error.classList.add("hidden")
    }


})
function isEmail(inputValue){
    return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(inputValue)
}