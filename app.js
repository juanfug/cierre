const appNode = document.querySelector('#app')
const baseUrl = 'https://www.sanagustinvirtual.co/ordenes/'

const getLink = () => {
  const inputDocument = document.querySelector('#input-document').value
  console.log(inputDocument)

  const allItems = []
  const pdfLink = `${baseUrl}${inputDocument}.pdf`
  const container = document.createElement('div')
  const sectionContainer = document.createElement('section')
  const linkNotes = document.createElement('a')
  const buttonContent = document.createTextNode('Ver notas')
  const embedPdf = document.createElement('iframe')
  const banner = document.createElement('div')
  const bannerImg = document.createElement('img')
  banner.className = 'banner'
  bannerImg.src = '/img/Banner-mensaje.jpg'
  linkNotes.setAttribute('href', 'programa.html')
  linkNotes.appendChild(buttonContent)
  linkNotes.setAttribute('class', 'note')
  embedPdf.setAttribute('src', pdfLink)
  embedPdf.setAttribute('width', '600')
  embedPdf.setAttribute('height', '650')
  embedPdf.setAttribute('type', 'application/pdf')
  embedPdf.setAttribute('class', 'view-pdf')
  container.appendChild(embedPdf)
  banner.appendChild(bannerImg)
  sectionContainer.appendChild(banner)
  sectionContainer.appendChild(linkNotes)
  sectionContainer.appendChild(container)
  allItems.push(sectionContainer)
  if (appNode.hasChildNodes()) {
    appNode.removeChild(appNode.childNodes[0])
  }
  appNode.append(...allItems)
  console.log(appNode)
}

//getLink(inputDocument)
{
  /* <section class="conten-page">
      <button class="notes"><a href="programa.html"> Ver Notas</a></button>

      <div>
        <embed
          class="view-pdf"
          src="https://www.sanagustinvirtual.co/ordenes/1003399763.pdf"
          type="application/pdf"
          width="900"
          height="650"
        />
      </div>
    </section> */
}
