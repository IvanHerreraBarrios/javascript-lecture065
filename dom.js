function hello(){
    alert("Hello World")
    console.log(event)
}

function gretting(name = "Unknown"){
    alert(`Hi ${name} - ${event}`)
}

const $semanticHandler = document.getElementById("semantic-handler"),
$multiHandler = document.getElementById("multi-handler"),
$removeHandler = document.getElementById("remove-handler")

$semanticHandler.onclick = hello
$semanticHandler.onclick = function (e) {
    alert("Semantic handler")
    console.log(e)
    console.log(event)
}

$multiHandler.addEventListener("click", hello)
$multiHandler.addEventListener("click", (e) => {
    alert("Multi handler")
    console.log(e)
    console.log(e.type)
    console.log(event)
})

$multiHandler.addEventListener("click", gretting)
$multiHandler.addEventListener("click", () => {
    gretting()
    gretting("John")
})

const removeDblClick = (e) => {
    alert(`Remove ${e.type}`)
    console.log(e)
    $removeHandler.removeEventListener("dblclick", removeDblClick)
    $removeHandler.disable = true 
}

$removeHandler.addEventListener("dblclick", removeDblClick)


//before
/*
$multiHandler.addEventListener("click", function () {
    gretting
})*/