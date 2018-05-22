let link = document.createElement("link")
document.head.appendChild(link)
link.rel = "stylesheet"
link.type = "text/css"
link.href = "css/styles.css"

let bootStrapLink = document.createElement("link")
document.head.appendChild(bootStrapLink)
bootStrapLink.rel = "stylesheet"
bootStrapLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
bootStrapLink.integrity = "sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
bootStrapLink.crossorigin = "anonymous"

let bootscript1 = document.createElement("script")
document.head.appendChild(bootscript1)
bootscript1.src = "https://code.jquery.com/jquery-3.3.1.slim.min.js"
bootscript1.integrity = "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
bootscript1.crossorigin = "anonymous"

let bootscript2 = document.createElement("script")
document.head.appendChild(bootscript2)
bootscript2.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
bootscript2.integrity = "sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
bootscript2.crossorigin = "anonymous"

let bootscript3 = document.createElement("script")
document.head.appendChild(bootscript3)
bootscript3.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
bootscript3.integrity = "sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
bootscript3.crossorigin = "anonymous"

let navbar = document.createElement("nav")
document.body.appendChild(navbar)
navbar.className = "nav nav-pills nav-justified"

let navanchor1 = document.createElement("a")
navbar.appendChild(navanchor1)
navanchor1.className = "nav-item nav-link active"
navanchor1.innerHTML = "HighOnCoding"
navanchor1.href = "#"

let navanchor2 = document.createElement("a")
navbar.appendChild(navanchor2)
navanchor2.className = "nav-item nav-link"
navanchor2.innerHTML = "Home"
navanchor2.href = "#"

let navanchor3 = document.createElement("a")
navbar.appendChild(navanchor3)
navanchor3.className = "nav-item nav-link"
navanchor3.innerHTML = "Articles"
navanchor3.href = "#"

let jumbo = document.createElement("div")
document.body.appendChild(jumbo)
jumbo.className = "jumbotron"

let jumboHeader = document.createElement("h1")
jumbo.appendChild(jumboHeader)
jumboHeader.className = "display-6"
jumboHeader.innerHTML = "The Curse of the Current Reviews"

let jumboContent = document.createElement("p")
jumbo.appendChild(jumboContent)
jumboContent.className = "lead"
jumboContent.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."

let jumboButton = document.createElement("a")
jumbo.appendChild(jumboButton)
jumboButton.className = "btn btn-primary btn-lg"
jumboButton.href = "#"
jumboButton.role = "button"
jumboButton.innerHTML = "Read More"

let cardGroup = document.createElement("div")
document.body.appendChild(cardGroup)
cardGroup.className = "card-group"

let card1 = document.createElement("div")
cardGroup.appendChild(card1)
card1.className = "card"

let cardBody1 = document.createElement("div")
card1.appendChild(cardBody1)
cardBody1.className = "card-body"

let cardTitle1 = document.createElement("h5")
cardBody1.appendChild(cardTitle1)
cardTitle1.className = "card-title"
cardTitle1.innerHTML = "Hello WatchKit"

let cardParagragh1 = document.createElement("p")
cardBody1.appendChild(cardParagragh1)
cardParagragh1.className = "card-text"
cardParagragh1.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
