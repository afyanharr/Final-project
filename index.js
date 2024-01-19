const submitDataWeb = () => {
    const devWeb = document.getElementById("dev-web").innerHTML
    const secWeb = document.getElementById("sec-web").innerHTML
    const hostWeb = document.getElementById("host-web").innerHTML
    const opsWeb = document.getElementById("ops-web").innerHTML

    webApps = [{
        dev : devWeb,
        sec : secWeb,
        host : hostWeb,
        ops : opsWeb
    }]

    localStorage.setItem("WebApps", JSON.stringify(webApps))


}

const submitDataMobile = () => {
    const devMobile =document.getElementById("dev-mobile").innerHTML
    const secMobile =document.getElementById("sec-mobile").innerHTML
    const hostMobile =document.getElementById("host-mobile").innerHTML
    const opsMobile =document.getElementById("ops-mobile").innerHTML

    mobileApps = [{
        dev : devMobile,
        sec : secMobile,
        host : hostMobile,
        ops : opsMobile
    }]

    localStorage.setItem("MobileApps", JSON.stringify(mobileApps))
}
