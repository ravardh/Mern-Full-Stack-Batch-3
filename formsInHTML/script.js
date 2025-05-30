function submit(){
    const nm = document.getElementById("name");

    const nmm = document.getElementById("Name");

    nmm.innerText = nm.value;
    nm.value = "";
}