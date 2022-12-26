$("#registrationform").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxcVLRYWrNeJzHTZBCcahgjpyPogS67iS8qOq3cbNvq2AumGC4J2Xu-GmtXHDt7P8al/exec",
        data:$("#registrationform").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
