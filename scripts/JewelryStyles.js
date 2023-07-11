import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)
//creted function that returns radio button optins for style option
export const JewelryStyles = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    let listItemsArray = styles.map(style => {
        return `<li>
            <input type="radio" name="style" value="${style.id}">${style.style}</li>`
    })
    html += listItemsArray.join("")
    html += "</ul>"
    return html
}
