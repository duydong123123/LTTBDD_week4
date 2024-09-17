import React, { useState } from 'react';

const ProductReview = () => {
  const [rating, setRating] = useState(5); // Default to 5 stars
  const [review, setReview] = useState('');
  const [image, setImage] = useState(null);

  const handleRatingChange = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      rating,
      review,
      image,
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
      {/* Container to align the image and text side by side */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <img 
          src="./image/image1.png" 
          alt="USB Bluetooth Music Receiver" 
          style={{ width: '40px', height: '40px' }} 
        />
        <h3 style={{ margin: 0 }}>USB Bluetooth Music Receiver HJX-001</h3>
      </div>
      <p style={{ textAlign: 'center' }}>Biến loa thường thành loa bluetooth</p>

      <div>
        <p style={{ fontWeight: 'bold', margin: '10px 0' }}>Cực kỳ hài lòng</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
          {[...Array(5)].map((_, index) => (
            <span 
              key={index}
              onClick={() => handleRatingChange(index + 1)}
              style={{ 
                cursor: 'pointer',
                color: index < rating ? '#FFD700' : '#ccc', 
                fontSize: '2rem' 
              }}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div style={{ margin: '20px 0' }}>
        <label htmlFor="image-upload">
          <span style={{ cursor: 'pointer', display: 'block', border: '1px solid #007bff', padding: '10px', borderRadius: '5px', textAlign: 'center', color: '#007bff' }}>
            Thêm hình ảnh
          </span>
        </label>
        <input 
          type="file" 
          id="image-upload" 
          style={{ display: 'none' }} 
          onChange={handleImageChange} 
        />
        {image && <img src={image} alt="Review" style={{ width: '100%', marginTop: '10px', borderRadius: '5px' }} />}
      </div>

      <textarea
        value={review}
        onChange={handleReviewChange}
        placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
        rows="4"
        style={{ width: '100%', padding: '10px', borderRadius: '5px', borderColor: '#ccc', fontSize: '16px' }}
      />

      <button 
        onClick={handleSubmit} 
        style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', marginTop: '20px' }}
      >
        Gửi
      </button>
    </div>
  );
};

export default ProductReview;
