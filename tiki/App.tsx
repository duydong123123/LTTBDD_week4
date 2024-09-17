import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CheckoutScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  const [subtotal, setSubtotal] = useState(141800);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleApplyDiscount = () => {
    // Logic to apply discount can go here
    alert(`Discount code ${discountCode} applied`);
  };

  return (
    <View style={styles.container}>
      {/* Product Section */}
      <View style={styles.productSection}>
        <Image
          source={{ uri: 'https://salt.tikicdn.com/cache/w1200/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg' }}
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.seller}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>141.800 ₫</Text>
          <Text style={styles.originalPrice}>141.800 ₫</Text>
          {/* Quantity */}
          <View style={styles.quantityControl}>
            <TouchableOpacity onPress={handleDecreaseQuantity} style={styles.quantityButton}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={handleIncreaseQuantity} style={styles.quantityButton}>
              <Text>+</Text>
            </TouchableOpacity>
            <Text style={styles.saveLater}>Mua sau</Text>
          </View>
        </View>
      </View>

      {/* Discount Section */}
      <View style={styles.discountSection}>
        <TextInput
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
          style={styles.discountInput}
        />
        <Button title="Áp dụng" onPress={handleApplyDiscount} />
      </View>

      {/* Additional Text for Gift Voucher */}
      <Text style={styles.giftVoucherText}>
        Bạn có phiếu quà tặng Tiki/Got it/Urbox? <Text style={styles.giftVoucherLink}>Nhập mã tại đây</Text>.
      </Text>

      {/* Subtotal Section */}
      <View style={styles.subtotalSection}>
        <Text style={styles.subtotalText}>Tạm tính</Text>
        <Text style={styles.subtotalAmount}>{subtotal.toLocaleString()} ₫</Text>
      </View>

      {/* Space Between Subtotal and Total */}
      <View style={styles.spaceBetween}></View>

      {/* Total Section */}
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Thành tiền</Text>
        <Text style={styles.totalAmount}>{subtotal.toLocaleString()} ₫</Text>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  productSection: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seller: {
    fontSize: 12,
    color: '#888',
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    color: '#e53935',
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
    marginVertical: 4,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 16,
  },
  saveLater: {
    marginLeft: 16,
    color: '#007bff',
  },
  discountSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  giftVoucherText: {
    fontSize: 12,
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  giftVoucherLink: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  subtotalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  subtotalText: {
    fontSize: 16,
  },
  subtotalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  spaceBetween: {
    marginVertical: 20,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e53935',
  },
  checkoutButton: {
    backgroundColor: '#e53935',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
