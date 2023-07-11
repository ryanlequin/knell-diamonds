import { getMetals, getStyles, getSizes, getOrders } from "./database.js"

const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

const buildOrderListItem = (order) => {
    //find the price of metal
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    //store value of prices to var
    const totalCost = foundMetal.price + foundStyle.price + foundSize.price

    //converts a number to string
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and costs ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"
    //added () in buildOrderListitem to call it
    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

