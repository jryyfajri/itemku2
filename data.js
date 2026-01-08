function addToCart() {
  alert("Akun berhasil ditambahkan ke keranjang!");
}
function addToCart(name, price, game) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    game: game
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Akun berhasil ditambahkan ke keranjang!");
}
function processPayment() {
  let payment = document.getElementById("payment").value;

  if (!payment) {
    alert("Pilih metode pembayaran!");
    return;
  }

  alert(
    "Pembayaran berhasil!\n" +
    "Metode: " + payment + "\n" +
    "Akun akan dikirim via Email."
  );

  localStorage.removeItem("cart");
  window.location.href = "success.html";
}
// ===== TAMBAH KE KERANJANG =====
function addToCart(name, price, game) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    game: game
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Akun berhasil ditambahkan ke keranjang!");
}

// ===== LOAD KERANJANG =====
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-container");

  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = "<p>🛒 Keranjang masih kosong</p>";
    document.getElementById("checkoutBtn").disabled = true;
    return;
  }

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br>
          <small>${item.game}</small>
        </div>
        <div>
          Rp${item.price.toLocaleString()}
          <button onclick="removeItem(${index})">Hapus</button>
        </div>
      </div>
    `;
  });

  container.innerHTML += `
    <h3>Total: Rp${total.toLocaleString()}</h3>
  `;
}

// ===== HAPUS ITEM =====
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// ===== PROSES PEMBAYARAN =====
function processPayment() {
  let payment = document.getElementById("payment").value;

  if (!payment) {
    alert("Pilih metode pembayaran!");
    return;
  }

  alert("Pembayaran berhasil menggunakan " + payment);
  localStorage.removeItem("cart");
  window.location.href = "success.html";
}