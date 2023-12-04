function createInvoice() {
    // Retrieve form values
    const name = document.getElementById('name').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const phone = document.getElementById('phone').value;
    const item1 = document.getElementById('item1').value;
    const price1 = parseFloat(document.getElementById('price1').value);
    const item2 = document.getElementById('item2').value;
    const price2 = parseFloat(document.getElementById('price2').value);
    const item3 = document.getElementById('item3').value;
    const price3 = parseFloat(document.getElementById('price3').value);
  
    // Calculate subtotal, tax, and total
    const subtotal = price1 + price2 + price3;
    const tax = subtotal * 0.07;
    const total = subtotal + tax;
  
    // Format calculated amounts
    const formattedSubtotal = subtotal.toFixed(2);
    const formattedTax = tax.toFixed(2);
    const formattedTotal = total.toFixed(2);
  
    // Generate invoice content using template literals
    const invoiceContent = `
      <h1>Customer Invoice</h1>
      <table>
      <tr>
        <th colspan="3">Customer Information</th>
      </tr>
      <tr>
        <td colspan="3">
          Customer Name: ${name}<br>
          Street: ${street}<br>
          City: ${city}, ${state} ${zip}<br>
          Phone: ${phone}
        </td>
      </tr>
      <tr>
        <th width="20%">Item</th>
        <th>Product</th>
        <th width="20%">Price</th>
      </tr>
      <tr>
        <td>1</td>
        <td>${item1}</td>
        <td>$${price1}</td>
      </tr>
      <tr>
        <td>2</td>
        <td>${item2}</td>
        <td>$${price2}</td>
      </tr>
      <tr>
        <td>3</td>
        <td>${item3}</td>
        <td>$${price3}</td>
      </tr>
      <tr>
        <td></td>
        <td>Subtotal</td>
        <td>$${formattedSubtotal}</td>
      </tr>
      <tr>
        <td></td>
        <td>Tax</td>
        <td>$${formattedTax}</td>
      </tr>
      <tr>
        <td></td>
        <td>Total</td>
        <td>$${formattedTotal}</td>
      </tr>
    </table>
    
    `;
  
    // Open a new window and write the invoice content
    const newWindow = window.open('invoice.html', '_blank');
    const newWindowDocument = newWindow.document;
    newWindowDocument.open();
    newWindowDocument.write(invoiceContent);
    newWindowDocument.close();
  }
  