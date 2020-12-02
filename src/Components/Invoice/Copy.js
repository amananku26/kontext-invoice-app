import React, {Component} from 'react'
import jsPDF from "jspdf"
import {useSelector} from 'react-redux'
import 'jspdf-autotable'

function Copy() {
    var data = useSelector((state) => state)
    // console.log(data);


    const jsPdfGenerator = () => {
        console.log(data)
        const {
            CAdd,
            Cid,
            Cname,
            InId,
            date,
            description,
            id,
            name,
            price,
            quantity,
            lineItems
        } = data.data

        console.log(Cname)
        var doc = new jsPDF("p", "pt")
        doc.text(20, 20, Cname)
        doc.text(CAdd, 20, 50);
        doc.text(Cid, 20, 80);

        doc.text("#" + InId, 20, 110);


        doc.text(date, 20, 140);
        doc.setFont("courier")
        doc.autoTable({html: '#my-table'})

        // Or use javascript directly:
        doc.autoTable({
            startY: doc.autoTableEndPosY() + 130,
            margin: {
                horizontal: 10
            },
            styles: {
                overflow: 'linebreak'
            },
            bodyStyles: {
                valign: 'top'
            },
            head: [
                ['Item', 'Description', 'Qty', 'Price']
            ],
            margin: {
                top: 100
            },
            body: lineItems.map((item) => [
                [item.name],
                [item.description],
                [item.quantity],
                [item.price]
            ])
        })


        doc.save("invoice.pdf")

    }


    return (
        <button onClick={jsPdfGenerator}>Generate Bill</button>
    )

}


export default Copy
